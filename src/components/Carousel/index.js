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

const StyledSlider = styled(Slider)`
  margin-bottom: 4rem;
  .slick-dots {
    display: flex !important;
    justify-content: center;
    column-gap: 0.5rem;
    bottom: 30px;
  }
`;

const Carousel = () => {
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
