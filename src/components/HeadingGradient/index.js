import colors from 'constants/colors';
import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h1`
  font-family: 'Raleway', sans-serif;
  text-align: center;
  font-weight: 800;
  font-size: 48px;
  background-color: ${colors.primary};
  background-image: linear-gradient(
    98.87deg,
    #7c2fdf 30%,
    ${colors.accent} 100%
  );
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  margin-bottom: -8px;
`;

const HeadingGradient = ({ children }) => {
  return <StyledHeading>{children}</StyledHeading>;
};

export default HeadingGradient;
