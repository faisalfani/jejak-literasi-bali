import Text from 'components/Text';
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import docData from './docData';

const StyledSlider = styled(Slider)`
  margin-bottom: 4rem;
  z-index: 1;
  .slick-slide > div {
    margin: 0 10px;
  }
  .slick-list {
    margin: 0 -10px;
  }
`;

const DocumentationCard = styled.div`
  background-color: white;
  padding: 1rem;
  box-shadow: 0px 16px 40px rgba(0, 0, 0, 0.12);
  border-radius: 15px;
`;

const DocImage = styled.img`
  border-radius: 15px;
  width: 100%;
  object-fit: cover;
  min-height: 300px;
  max-height: 300px;
  position: relative;
  transition: all 0.5s;
  cursor: zoom-in;
  :hover {
    filter: brightness(70%);
  }
`;

const ImageContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
  text-align: center;
`;

const DocumentationCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <StyledSlider {...settings}>
      {docData.map((data) => (
        <DocumentationCard>
          <ImageContainer>
            <DocImage src={data.image} />
            <Text>{data.title}</Text>
          </ImageContainer>
        </DocumentationCard>
      ))}
    </StyledSlider>
  );
};

export default DocumentationCarousel;
