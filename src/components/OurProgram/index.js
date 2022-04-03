import React from 'react';
import ProgramHeading from './ProgramHeading';
import { OurProgramContainer, ProgramContainer } from './styled';
import Description from 'components/Description';
import program from './program';

const OurProgram = () => {
  return (
    <OurProgramContainer>
      {program.map((data, index) => {
        const {
          withSectionTitle,
          programName,
          programAlias,
          imageUrl,
          type,
          sectionTitle,
          highlightTitle,
          normalTitle,
          description,
        } = data;
        return (
          <ProgramContainer>
            <ProgramHeading
              index={index + 1}
              programName={programName}
              programAlias={programAlias}
              withSection={withSectionTitle}
            />
            <div className='container'>
              <Description
                imageUrl={imageUrl}
                type={type}
                sectionTitle={sectionTitle}
                highlightTitle={highlightTitle}
                normalTitle={normalTitle}
                description={description}
              />
            </div>
          </ProgramContainer>
        );
      })}
    </OurProgramContainer>
  );
};

export default OurProgram;
