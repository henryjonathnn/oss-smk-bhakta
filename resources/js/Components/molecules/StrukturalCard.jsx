import React from 'react';
import PropTypes from 'prop-types';

const StrukturalCard = ({ nama, jabatan, image, className }) => (
  <div className={`${className} w-64 bg-white rounded-lg shadow-md overflow-hidden`}>
    <div className="w-full h-80 overflow-hidden">
      <img 
        src={image} 
        alt={nama} 
        className="w-full h-full object-cover object-top"
      />
    </div>
    <div className="p-4 text-center">
      <h3 className="font-bold text-lg">{nama}</h3>
      <p className="text-gray-600 mt-2">{jabatan}</p>
    </div>
  </div>
);

StrukturalCard.propTypes = {
  nama: PropTypes.string.isRequired,
  jabatan: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  className: PropTypes.string,
};

// Container component to center the cards
const CenteredCardContainer = ({ children }) => (
  <div className="flex justify-center items-center flex-wrap gap-8">
    {children}
  </div>
);

export { StrukturalCard, CenteredCardContainer };