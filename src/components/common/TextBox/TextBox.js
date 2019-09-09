import React from 'react';
import PropTypes from 'prop-types';
import './TextBox.scss';

const TextBox = props => {
  return (
    <div className="textbox-container">
      {props.value ? (
        <span className="tiny-placeholder">{props.placeholder}</span>
      ) : null}

      <input
        type={props.type || 'text'}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onTextChange}
        readOnly={props.readOnly}
        value={props.value}
        className={props.errored ? 'errored' : null}
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
  errored: PropTypes.bool,
  type: PropTypes.string
};
