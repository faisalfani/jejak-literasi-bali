import HeadingGradient from 'components/HeadingGradient';
import Text from 'components/Text';
import React from 'react';

const ProgramHeading = ({ programName, programAlias }) => {
  return (
    <>
      <HeadingGradient>{programName}</HeadingGradient>
      <Text>{programAlias}</Text>
    </>
  );
};

export default ProgramHeading;
