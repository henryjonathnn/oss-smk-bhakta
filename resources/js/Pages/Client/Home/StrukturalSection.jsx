import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { StrukturalCard,  CenteredCardContainer } from '../../../Components/molecules/StrukturalCard';

const StrukturalSection = ({ anggota }) => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 md:px-8 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <Suspense fallback={<div className="w-full h-64 bg-gray-200 rounded-lg animate-pulse"></div>}>
          {anggota.map((anggota, index) => (
            <CenteredCardContainer>
              <StrukturalCard key={index} {...anggota} />
            </CenteredCardContainer>
          ))}
        </Suspense>
      </div>
    </div>
  </section>
);

StrukturalSection.propTypes = {
  anggota: PropTypes.arrayOf(
    PropTypes.shape({
      nama: PropTypes.string.isRequired,
      jabatan: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default StrukturalSection;