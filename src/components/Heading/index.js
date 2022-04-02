import React from 'react';
import { Heading as StyledHeading } from './styled';

const Heading = ({ children, ...restProps }) => {
  return <StyledHeading {...restProps}>{children}</StyledHeading>;
};

export default Heading;
