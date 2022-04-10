/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Slider from 'react-slick';
import { CarouselItem } from './styled';
import CarouselOne from '../../assets/img/carousel-one.jpeg';
import CarouselTwo from '../../assets/img/carousel-two.jpeg';
import CarouselThree from '../../assets/img/carousel-three.jpeg';
import CarouselFour from '../../assets/img/carousel-four.jpeg';
import styled from 'styled-components';
import NextButton from 'components/NextButton';
import BackButton from 'components/BackButton';
import colors from 'constants/colors';
import { useMediaQuery } from 'react-responsive';
import Devices from 'utils/Devices';

const StyledSlider = styled(Slider)`
  margin-bottom: 4rem;
  .slick-dots {
    display: flex !important;
    justify-content: center;
    column-gap: 0.5rem;
    bottom: 30px;
    ${Devices.phone} {
      bottom: 20px;
      column-gap: 0.8rem;
    }
    .slick-active {
      a {
        background-color: ${colors.accent}90 !important;
      }
    }
  }
`;

const Carousel = () => {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const settings = {
    customPaging: (i) => (
      <a
        style={{
          width: '30px',
          height: '30px',
          color: 'white',
          backgroundColor: `#FFFFFF50`,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {i + 1}
      </a>
    ),
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: isMobile ? false : true,
    nextArrow: <NextButton />,
    prevArrow: <BackButton />,
  };
  return (
    <StyledSlider {...settings}>
      <CarouselItem src={CarouselOne} alt='carouselOne' />
      <CarouselItem src={CarouselTwo} alt='CarouselTwo' />
      <CarouselItem src={CarouselThree} alt='CarouselThree' />
      <CarouselItem src={CarouselFour} alt='CarouselFour' />
    </StyledSlider>
  );
};

export default Carousel;
