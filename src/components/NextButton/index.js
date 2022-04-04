import React from 'react';
import { ChevronRight } from 'react-feather';

const NextButton = ({ onClick, isDocumentation }) => (
  <div
    style={{
      position: 'absolute',
      right: isDocumentation ? '-60px' : '50px',
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
    }}
    onClick={onClick}
  >
    <ChevronRight />
  </div>
);
export default NextButton;
