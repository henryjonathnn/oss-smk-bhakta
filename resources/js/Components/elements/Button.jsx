import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

const Button = ({ 
  children, 
  className = '', 
  variant = 'default', 
  size = 'default', 
  href, 
  ...props 
}) => {
  const baseStyles = "font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    default: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500",
    outline: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
  };

  const sizes = {
    small: "px-2 py-1 text-sm",
    default: "px-4 py-2",
    large: "px-6 py-3 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <InertiaLink href={href} className={classes} {...props}>
        {children}
      </InertiaLink>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;