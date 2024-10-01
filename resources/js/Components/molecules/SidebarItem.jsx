import React from 'react';
import { Link } from '@inertiajs/react';

const SidebarItem = ({ href, icon: Icon, label, active }) => {
  return (
    <Link
      href={href}
      className={`flex items-center space-x-2 px-4 py-3 rounded-md text-sm font-medium transition-colors ${active
          ? 'bg-slate-800 text-white'
          : 'text-slate-300 hover:bg-slate-700 hover:text-white'
        }`}
    >
      <Icon size={20} />
      <span>{label}</span>
    </Link>
  );
};

export default SidebarItem;