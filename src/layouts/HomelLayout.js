import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const HomelLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default HomelLayout;
