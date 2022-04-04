import colors from 'constants/colors';
import React from 'react';
import styled from 'styled-components';

const Paging = styled.button`
  width: 30px;
  height: 30px;
  color: ${colors.primary};
  background-color: ${colors.primary}30;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CarouselPaging = ({ index }) => {
  return <Paging>{index + 1}</Paging>;
};

export default CarouselPaging;
