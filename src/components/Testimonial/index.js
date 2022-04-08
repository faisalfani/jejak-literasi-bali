import HeadingGradient from 'components/HeadingGradient';
import colors from 'constants/colors';
import React from 'react';
import styled from 'styled-components';
import TestimonialCarousel from './TestimonialCarousel';

const TestimonialContainer = styled.div`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
  overflow: hidden;
  position: relative;
  ::after {
    content: '';
    height: 60vh;
    border-radius: 50% 50% 0 0;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: ${colors.primary}30;
  }
`;

const Testimonial = () => {
  return (
    <TestimonialContainer>
      <HeadingGradient>Kata Mereka</HeadingGradient>
      <TestimonialCarousel />
    </TestimonialContainer>
  );
};

export default Testimonial;
