import styled from 'styled-components';
import Devices from 'utils/Devices';

export const CarouselItem = styled.img`
  width: 100%;
  ${Devices.phone} {
    height: 350px;
    object-fit: cover;
  }
`;
