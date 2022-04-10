import BackButton from 'components/BackButton';
import NextButton from 'components/NextButton';
import Text from 'components/Text';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Slider from 'react-slick';
import styled from 'styled-components';
import docData from './docData';
import { useLightgallery } from 'react-lightgallery';

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

const Images = ({ data, group }) => {
  const { openGallery } = useLightgallery();

  return (
    <ImageContainer onClick={() => openGallery(`group${group}`)}>
      <DocImage src={data.image} />
      <Text>{data.title}</Text>
    </ImageContainer>
  );
};

const DocumentationCarousel = () => {
  const isMobile = useMediaQuery({ maxWidth: 480 });

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: isMobile ? 1 : 3,
    arrows: isMobile ? false : true,
    nextArrow: <NextButton isDocumentation />,
    prevArrow: <BackButton isDocumentation />,
  };
  return (
    <StyledSlider {...settings}>
      {docData.map((data, idx) => (
        <DocumentationCard>
          <Images data={data} group={idx + 1} />
        </DocumentationCard>
      ))}
    </StyledSlider>
  );
};

export default DocumentationCarousel;
