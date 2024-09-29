import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, className, ...props }) => (
  <input
    type={type}
    className={`border rounded-md px-3 py-2 w-full ${className}`}
    {...props}
  />
);

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;