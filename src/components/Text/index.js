import React from 'react';

import styled from 'styled-components';

const StyledText = styled.div`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  letter-spacing: ${(props) => props.spacing};
`;

const Text = ({ children, ...restProps }) => {
  return <StyledText {...restProps}>{children}</StyledText>;
};

export default Text;
