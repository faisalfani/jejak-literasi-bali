import React from 'react';
import { ChevronLeft } from 'react-feather';

const BackButton = ({ onClick, isDocumentation }) => (
  <div
    style={{
      position: 'absolute',
      left: isDocumentation ? '-60px' : '50px',
      top: '50%',
      width: '40px',
      height: '40px',
      backgroundColor: '#00000080',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      cursor: 'pointer',
      zIndex: 100,
    }}
    onClick={onClick}
  >
    <ChevronLeft />
  </div>
);

export default BackButton;
