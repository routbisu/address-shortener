import React, { useState } from 'react';
import './Shorten.scss';
import TextBox from '../../components/common/TextBox/TextBox';

const Shorten = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState('');
  const [erroredFields, setErroredFields] = useState({});

  const changeHandler = evt => {
    formData[evt.target.name] = evt.target.value;
    setFormData(formData);

    const currentErrorFields = { ...erroredFields };
    currentErrorFields[evt.target.name] = evt.target.value ? false : true;
    setErroredFields(currentErrorFields);
  };

  const validateForm = () => {
    // Required fields
    const reqFields = ['block', 'area', 'postcode', 'handle'];
    const currentErrorFields = { ...erroredFields };

    reqFields.forEach(reqField => {
      if (formData[reqField]) currentErrorFields[reqField] = false;
      else currentErrorFields[reqField] = true;
    });

    setErroredFields(currentErrorFields);

    // Returns true if validation is successful
    const { block, area, postcode, handle } = formData;
    return block && area && postcode && handle;
  };

  const submitForm = evt => {
    if (validateForm()) {
      // AJAX CALL
      setError('');
    } else {
      // Show error message
      setError('Please fill the missing fields');
    }

    evt.preventDefault();
  };

  return (
    <div className="shorten-container">
      {error ? <div className="error-message">{error}</div> : null}

      <form onSubmit={submitForm}>
        <div className="input-40">
          <TextBox
            name="block"
            placeholder="Block #"
            onTextChange={changeHandler}
            errored={erroredFields.block}
          />
        </div>
        <div className="input-60">
          <TextBox
            name="area"
            placeholder="Area"
            onTextChange={changeHandler}
            errored={erroredFields.area}
          />
        </div>
        <div className="input-40">
          <TextBox
            name="unit"
            placeholder="Unit #"
            onTextChange={changeHandler}
          />
        </div>
        <div className="input-60">
          <TextBox
            name="building"
            placeholder="Building Name"
            onTextChange={changeHandler}
          />
        </div>
        <TextBox
          name="postcode"
          placeholder="PostCode"
          onTextChange={changeHandler}
          errored={erroredFields.postcode}
        />
        <TextBox
          name="country"
          placeholder="Country"
          onTextChange={changeHandler}
          value="Singapore"
          readOnly={true}
        />
        <TextBox
          name="handle"
          placeholder="Address Handle"
          onTextChange={changeHandler}
          errored={erroredFields.handle}
        />
        <button type="submit">Shorten!</button>
      </form>
    </div>
  );
};

export default Shorten;
