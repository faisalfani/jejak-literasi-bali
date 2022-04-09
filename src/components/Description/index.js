import Text from 'components/Text';
import colors from 'constants/colors';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { AboutUsDescContainer, StyledImage, TextContainer } from './styled';

const Description = ({
  type,
  imageUrl,
  sectionTitle,
  highlightTitle,
  normalTitle,
  description,
}) => {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const renderType = () => {
    if (type === 'right' && isMobile) {
      return 'left';
    }
    return type;
  };
  return (
    <AboutUsDescContainer>
      {renderType() === 'left' && (
        <StyledImage src={imageUrl} alt='descImage' />
      )}
      <TextContainer>
        <Text size={isMobile ? '0.9rem' : '1rem'} color='black' weight='bolder'>
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
        <Text size='0.9rem' weight='400'>
          &emsp; {description}
        </Text>
        <Text size='1rem' weight='300'></Text>
      </TextContainer>
      {renderType() === 'right' && (
        <StyledImage src={imageUrl} alt='founderImage' />
      )}
    </AboutUsDescContainer>
  );
};

export default Description;
