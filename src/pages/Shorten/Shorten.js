import React from 'react';
import './Shorten.scss';

const Shorten = () => {
  return (
    <div className="shorten-container">
      <form action="">
        <input
          type="text"
          name="block"
          placeholder="Block #"
          className="input-40"
        />
        <input
          type="text"
          name="area"
          placeholder="Area"
          className="input-60"
        />
        <input
          type="text"
          name="unit"
          placeholder="Unit #"
          className="input-40"
        />
        <input
          type="text"
          name="building"
          placeholder="Building Name"
          className="input-60"
        />
        <input type="text" name="postcode" placeholder="PostCode" />
        <input type="text" name="country" placeholder="Country" />
        <input type="text" name="handle" placeholder="Address Handle" />
        <button type="submit">Shorten!</button>
      </form>
    </div>
  );
};

export default Shorten;
