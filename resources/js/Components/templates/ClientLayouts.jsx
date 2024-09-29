// File: /Components/templates/ClientLayout.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from '../organism/Navbar';
import { Footer } from '../organism/Footer';

const ClientLayout = ({ children }) => (
  <div className="bg-gray-50 min-h-screen">
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

ClientLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ClientLayout;