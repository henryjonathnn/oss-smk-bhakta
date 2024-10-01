import React from 'react';
import Sidebar from '../organism/Sidebar';
import PropTypes from 'prop-types';

const AdminLayouts = ({ children }) => (
  <div className="flex bg-gray-50 min-h-screen">
    <Sidebar />
    <div className="flex-1">
      <main className="p-8">{children}</main>
    </div>
  </div>
);

AdminLayouts.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminLayouts;