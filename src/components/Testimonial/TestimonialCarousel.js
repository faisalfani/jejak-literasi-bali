import BackButton from 'components/BackButton';
import NextButton from 'components/NextButton';
import Text from 'components/Text';
import colors from 'constants/colors';
import React from 'react';
import { Facebook } from 'react-feather';
import { useMediaQuery } from 'react-responsive';
import Slider from 'react-slick';
import styled from 'styled-components';
import Devices from 'utils/Devices';
import testi from './testi';

const StyledSlider = styled(Slider)`
  margin-bottom: 4rem;
  overflow: hidden;
  z-index: 1;
  .slick-slide > div {
    margin: 0 20px;
  }
  .slick-list {
    margin: 0 -20px;
  }
  ${Devices.phone} {
    margin-bottom: 0;
    .slick-cloned {
      display: none;
    }
    .slick-dots {
      height: 60px;
      bottom: -40px;
    }
  }
`;

const DocumentationCard = styled.div`
  background-color: white;
  border-radius: 15px;
  height: fit-content;
  height: 550px;
`;

const DocImage = styled.img`
  border-radius: 15px 15px 0 0;
  width: 100%;
  object-fit: cover;
  min-height: 300px;
  max-height: 300px;
  position: relative;
  transition: all 0.5s;
  background-color: black;
  :hover {
    filter: brightness(70%);
  }
`;

const ImageContainer = styled.span`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const TestiProfile = styled.div`
  display: flex;
  padding: 0 1rem;
  flex-direction: column;
  row-gap: 1rem;
`;

const ImageWrapper = styled.span`
  position: relative;
`;

const TestiSocial = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: linear-gradient(98.87deg, #7c2fdf 30%, ${colors.accent} 100%);
  z-index: 100;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  color: white;
`;

const TestimonialCarousel = () => {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const settings = {
    dots: true,
    className: 'center',
    centerMode: true,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    variableWidth: true,
    accessibility: false,
    arrows: isMobile ? false : true,
    nextArrow: <NextButton />,
    prevArrow: <BackButton />,
  };
  return (
    <StyledSlider {...settings}>
      {testi.map((data) => (
        <DocumentationCard style={{ width: 400 }}>
          <ImageContainer>
            <ImageWrapper>
              <DocImage src={data.image} />
              <TestiSocial>
                <a>
                  <Facebook size='20' />
                </a>
              </TestiSocial>
            </ImageWrapper>
            <TestiProfile>
              <div>
                <Text color={colors.primary} weight='600'>
                  {data.name}
                </Text>
                <Text color='#00000080' size='0.7rem'>
                  {data.position}
                </Text>
              </div>
              <Text size='0.9rem' align='justify'>
                {data.testimonial}
              </Text>
            </TestiProfile>
          </ImageContainer>
        </DocumentationCard>
      ))}
    </StyledSlider>
  );
};

export default TestimonialCarousel;
