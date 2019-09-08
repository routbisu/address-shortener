import React, { useState } from 'react';
import './Shorten.scss';
import TextBox from '../../components/common/TextBox/TextBox';
import {
  saveNewAddress,
  getAddressFromHandle
} from '../../services/addressService';

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

  // Address change handler
  const addressChangeHandler = evt => {
    const value = evt.target.value && evt.target.value.toString();
    evt.target.value = value ? value.replace(' ', '') : '';
    changeHandler(evt);
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
      // Check if handle is unique
      getAddressFromHandle(formData.handle).then(res => {
        if (res.data && res.data.length) {
          // Handle is duplicate
          setError(
            'This address handle already exists. Please try another one!'
          );
        } else {
          // AJAX CALL
          saveNewAddress(formData)
            .then(res => {
              console.log('res', res);
              if (res.status === 201) {
                setError('Your address handle is created!');
                setFormData({
                  block: '',
                  area: '',
                  unit: '',
                  building: '',
                  postcode: '',
                  handle: ''
                });
              }
            })
            .catch(error => {
              setError('The details could not be saved');
              console.log('Error while saving', error);
            });
          setError('');
        }
      });
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
            value={formData.block || ''}
          />
        </div>
        <div className="input-60">
          <TextBox
            name="area"
            placeholder="Area"
            onTextChange={changeHandler}
            errored={erroredFields.area}
            value={formData.area || ''}
          />
        </div>
        <div className="input-40">
          <TextBox
            name="unit"
            placeholder="Unit #"
            onTextChange={changeHandler}
            value={formData.unit || ''}
          />
        </div>
        <div className="input-60">
          <TextBox
            name="building"
            placeholder="Building Name"
            onTextChange={changeHandler}
            value={formData.building || ''}
          />
        </div>
        <TextBox
          name="postcode"
          placeholder="PostCode"
          onTextChange={changeHandler}
          errored={erroredFields.postcode}
          value={formData.postcode || ''}
          type="number"
        />
        <TextBox
          name="country"
          placeholder="Country"
          value="Singapore"
          readOnly={true}
        />
        <div className="spacer">
          -- Enter a short handle for your address --
        </div>
        <TextBox
          name="handle"
          placeholder="Address Handle"
          onTextChange={addressChangeHandler}
          errored={erroredFields.handle}
          value={formData.handle || ''}
        />
        <button type="submit">Shorten!</button>
      </form>
    </div>
  );
};

export default Shorten;
