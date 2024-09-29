import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, className, ...props }) => (
  <button className={`bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded ${className}`} {...props}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;