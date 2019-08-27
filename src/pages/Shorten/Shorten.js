import React, { useState } from 'react';
import './Shorten.scss';
import TextBox from '../../components/common/TextBox/TextBox';

const Shorten = () => {
  const [formData, setFormData] = useState({});

  const changeHandler = evt => {
    formData[evt.target.name] = evt.target.value;
    setFormData(formData);
  };

  const submitForm = evt => {
    console.log('Submitted', formData);
    evt.preventDefault();
  };

  return (
    <div className="shorten-container">
      <form onSubmit={submitForm}>
        <div className="input-40">
          <TextBox
            name="block"
            placeholder="Block #"
            onTextChange={changeHandler}
          />
        </div>
        <div className="input-60">
          <TextBox
            name="area"
            placeholder="Area"
            onTextChange={changeHandler}
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
        />
        <TextBox
          name="country"
          placeholder="Country"
          onTextChange={changeHandler}
        />
        <TextBox
          name="handle"
          placeholder="Address Handle"
          onTextChange={changeHandler}
        />
        <button type="submit">Shorten!</button>
      </form>
    </div>
  );
};

export default Shorten;
