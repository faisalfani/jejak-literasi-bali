import Heading from 'components/Heading';
import HeadingGradient from 'components/HeadingGradient';
import Text from 'components/Text';
import colors from 'constants/colors';
import React from 'react';
import { ProgramIndex } from './styled';

const ProgramHeading = ({ withSection, programName, programAlias, index }) => {
  return (
    <div className='d-flex align-items-center flex-column'>
      {withSection && <Heading color={colors.accent}>Program Kami</Heading>}
      <ProgramIndex index={index}>{index}</ProgramIndex>
      <HeadingGradient>{programName}</HeadingGradient>
      <Text>{programAlias}</Text>
    </div>
  );
};

export default ProgramHeading;
