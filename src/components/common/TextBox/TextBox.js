import React from 'react';
import PropTypes from 'prop-types';
import './TextBox.scss';

const TextBox = ({
  value,
  placeholder,
  name,
  readOnly,
  errored,
  onTextChange
}) => {
  return (
    <div className="textbox-container">
      {value ? <span className="tiny-placeholder">{placeholder}</span> : null}

      <input
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={onTextChange}
        readOnly={readOnly}
        value={value}
        className={errored ? 'errored' : null}
      />
    </div>
  );
};

export default TextBox;

TextBox.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onTextChange: PropTypes.func,
  value: PropTypes.string,
  readOnly: PropTypes.bool,
  errored: PropTypes.bool
};
