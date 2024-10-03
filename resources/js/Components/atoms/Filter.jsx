import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react'

const Filter = ({ filter, setFilter }) => {
    const [isOpen, setIsOpen] = useState(false);
    const options = [
      { value: 'all', label: 'Semua Sekbid' },
      { value: 'Sekbid 1', label: 'Sekbid 1' },
      { value: 'Sekbid 2', label: 'Sekbid 2' },
      { value: 'Sekbid 3', label: 'Sekbid 3' },
      { value: 'Sekbid 4', label: 'Sekbid 4' },
    ];
  
    return (
      <div className="relative inline-block text-left w-64">
        <div>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            {options.find(option => option.value === filter).label}
            <ChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
          </button>
        </div>
  
        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    setFilter(option.value);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

export default Filter