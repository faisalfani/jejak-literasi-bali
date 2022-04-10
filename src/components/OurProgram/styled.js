import colors from 'constants/colors';
import styled from 'styled-components';
import Devices from 'utils/Devices';

export const OurProgramContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;
`;

export const ProgramContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${Devices.phone} {
    height: auto;
    margin: 0;
  }
`;

export const ProgramIndex = styled.span`
  height: 30px;
  width: 30px;
  border-radius: 50px;
  background-color: ${(props) =>
    props.index % 2 === 0 ? colors.accent : colors.primary}30;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.index % 2 === 0 ? colors.accent : colors.primary)};
  font-weight: bold;
  margin-bottom: 10px;
`;
