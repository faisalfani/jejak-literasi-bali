import Heading from 'components/Heading';
import colors from 'constants/colors';
import React from 'react';
import ProgramHeading from './ProgramHeading';
import { OurProgramContainer } from './styled';

const OurProgram = () => {
  return (
    <OurProgramContainer>
      <Heading color={colors.accent}>Program Kami</Heading>
      <ProgramHeading
        programName='BIMTARA'
        programAlias='Bina Masyarakat Buta Aksara'
      />
    </OurProgramContainer>
  );
};

export default OurProgram;
