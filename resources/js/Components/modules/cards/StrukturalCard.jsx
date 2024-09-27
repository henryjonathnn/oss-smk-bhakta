import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../elements/Card';

const StrukturalCard = ({ nama, jabatan, image, className }) => (
  <Card
    className={`${className} flex flex-col h-full w-64`}
    imageUrl={image}
    imageAlt={nama}
    imageContainerClassName="pt-[160%]" // Increased height ratio
    imageClassName="object-cover"
    title={
      <div className="mt-4">
        <h3 className="text-center font-bold text-lg">{nama}</h3>
        <p className="text-center text-gray-600 mt-2">{jabatan}</p>
      </div>
    }
  />
);

StrukturalCard.propTypes = {
  nama: PropTypes.string.isRequired,
  jabatan: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default StrukturalCard;