import React from 'react';
import LazyImage from '../Context/LazyImage';

const StrukturalCard = ({ nama, jabatan, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden mx-10">
    <LazyImage src={image} alt={nama} className="w-full h-80" />
    <div className="p-4">
      <h3 className="font-bold text-lg mb-2 text-gray-950">{nama}</h3>
      <p className="text-gray-600 flex items-center">
       {jabatan}
      </p>
    </div>
  </div>
);

export default StrukturalCard;