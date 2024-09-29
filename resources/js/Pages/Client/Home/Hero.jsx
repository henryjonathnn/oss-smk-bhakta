import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../Components/atoms/Button';

const Hero = ({ title, subtitle, buttonText, backgroundImage }) => (
  <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url('${backgroundImage}')` }}>
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center text-white max-w-4xl px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">{title}</h1>
        <p className="text-xl md:text-2xl font-medium mb-10">{subtitle}</p>
        <Button className="py-3 px-8 rounded-full transform hover:scale-105 shadow-lg">
          {buttonText}
        </Button>
      </div>
    </div>
    <div className="absolute -bottom-3 left-0 right-0">
      <svg className="w-full h-16 text-gray-50" viewBox="0 0 1440 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 48h1440V0c-211.88 41.63-554.46 48-733.47 48C528.03 48 186.2 41.63 0 0v48z"></path>
      </svg>
    </div>
  </div>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

export default Hero;