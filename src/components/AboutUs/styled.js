import styled from 'styled-components';
import Devices from 'utils/Devices';

export const AboutUsDescContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 2rem;
  margin: 1rem;
  column-gap: 6rem;
  ${Devices.phone} {
    flex-direction: column-reverse;
    padding: 0;
    margin: 0;
    row-gap: 2rem;
  }
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
  ${Devices.phone} {
    width: 80vw;
  }
`;
