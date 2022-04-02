import React from 'react';
import Slider from 'react-slick';
import { CarouselItem } from './styled';
import CarouselOne from '../../assets/img/carousel-one.jpeg';
import CarouselTwo from '../../assets/img/carousel-two.jpeg';
import CarouselThree from '../../assets/img/carousel-three.jpeg';
import CarouselFour from '../../assets/img/carousel-four.jpeg';
import styled from 'styled-components';

const StyledSlider = styled(Slider)`
  margin-bottom: 4rem;
`;

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    accessibility: false,
    arrows: false,
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
