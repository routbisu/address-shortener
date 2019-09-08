import React, { useState } from 'react';
import TextBox from '../../components/common/TextBox/TextBox';
import './Expand.scss';
import { getAddressFromHandle } from '../../services/addressService';

const Expand = () => {
  const [address, setAddress] = useState({});
  const [handle, setHandle] = useState('');
  const [error, setError] = useState('');

  const changeHandler = evt => {
    setHandle(evt.target.value);
  };

  const submitForm = evt => {
    // Get address from handle
    getAddressFromHandle(handle)
      .then(res => {
        if (res.data && res.data.length) {
          setAddress(res.data[0]);
          setError('');
        } else {
          setError('The address was not found!');
        }
      })
      .catch(error => {
        setError('There was an unexpected error.');
      });

    evt.preventDefault();
  };

  const { area, block, postcode, unit, building } = address;

  return (
    <div className="expand-container">
      <form onSubmit={submitForm}>
        <div className="input-60">
          <TextBox
            name="handle"
            placeholder="Address Handle"
            onTextChange={changeHandler}
            value={handle}
          />
        </div>
        <div className="input-40">
          <button type="submit">Search</button>
        </div>
      </form>

      {error ? <div className="error-message">{error}</div> : null}

      {postcode ? (
        <div className="address-view">
          #{unit} {building}
          <br />
          {block}, {area}
          <br />
          Singapore - {postcode}
          <br />
        </div>
      ) : null}
    </div>
  );
};

export default Expand;
