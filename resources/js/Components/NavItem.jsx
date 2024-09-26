import React from 'react';
import { Link } from '@inertiajs/react';

const NavItem = ({ href, active, children }) => {
  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out ${
        active
          ? 'bg-slate-900 text-white'
          : 'text-gray-900 hover:bg-gray-100 hover:text-gray-800'
      }`}
    >
      {children}
    </Link>
  );
};

export default NavItem;