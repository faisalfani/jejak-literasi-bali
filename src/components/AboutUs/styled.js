import colors from 'constants/colors';
import styled from 'styled-components';

export const AboutHeading = styled.h1`
  width: 100%;
  text-align: center;
  font-weight: 700;
  line-height: 2;
  color: ${colors.primary};
  background-image: linear-gradient(98.87deg, #7c2fdf 0%, #984ec1 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;

export const AboutUsDescContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 2rem;
  margin: 1rem;
  column-gap: 6rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  flex: 1;
`;

export const Founder = styled.img`
  width: 30vw;
  border-radius: 15px;
  box-shadow: 0px 16px 40px rgba(0, 0, 0, 0.12);
`;
