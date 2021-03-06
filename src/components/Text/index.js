import React from 'react';

import styled from 'styled-components';

const StyledText = styled.div`
  color: ${(props) => props.color || 'black'};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  letter-spacing: ${(props) => props.spacing};
  display: ${(props) => props.display || 'block'};
  text-align: ${(props) => props.align};
`;

const Text = ({ children, ...restProps }) => {
  return <StyledText {...restProps}>{children}</StyledText>;
};

export default Text;
