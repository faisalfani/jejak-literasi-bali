import Text from 'components/Text';
import colors from 'constants/colors';
import React from 'react';
import { AboutUsDescContainer, StyledImage, TextContainer } from './styled';

const Description = ({
  type,
  imageUrl,
  sectionTitle,
  highlightTitle,
  normalTitle,
  description,
}) => {
  return (
    <AboutUsDescContainer>
      {type === 'left' && <StyledImage src={imageUrl} alt='descImage' />}
      <TextContainer>
        <Text size='1rem' color='black' weight='bolder'>
          <Text
            size='0.8rem'
            weight='600'
            spacing='0.075rem'
            color={colors.primary}
          >
            {sectionTitle}
          </Text>
          <Text color={colors.primary} display='inline'>
            {highlightTitle}
          </Text>
          &nbsp;{normalTitle}
        </Text>
        <Text size='0.75rem' weight='400'>
          &emsp; {description}
        </Text>
        <Text size='1rem' weight='300'></Text>
      </TextContainer>
      {type === 'right' && <StyledImage src={imageUrl} alt='founderImage' />}
    </AboutUsDescContainer>
  );
};

export default Description;
