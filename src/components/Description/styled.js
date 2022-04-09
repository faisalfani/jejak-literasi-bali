import styled from 'styled-components';
import Devices from 'utils/Devices';

export const AboutUsDescContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-top: 4rem;
  column-gap: 6rem;
  ${Devices.phone} {
    flex-direction: column;
    row-gap: 2rem;
    margin-bottom: 4rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  flex: 1;
`;

export const StyledImage = styled.img`
  width: 35vw;
  border-radius: 15px;
  box-shadow: 0px 16px 40px rgba(0, 0, 0, 0.12);
  ${Devices.phone} {
    width: 80vw;
  }
`;
