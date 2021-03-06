import HeadingGradient from 'components/HeadingGradient';
import colors from 'constants/colors';
import React from 'react';
import styled from 'styled-components';
import Devices from 'utils/Devices';
import TestimonialCarousel from './TestimonialCarousel';

const TestimonialContainer = styled.div`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
  overflow: hidden;
  position: relative;
  margin: 2rem 0;
  ::after {
    content: '';
    height: 60%;
    border-radius: 50% 50% 0 0;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: ${colors.primary}30;
    ${Devices.phone} {
      height: 0;
    }
  }
`;

const Testimonial = () => {
  return (
    <TestimonialContainer id='testimonial'>
      <HeadingGradient>Kata Mereka</HeadingGradient>
      <TestimonialCarousel />
    </TestimonialContainer>
  );
};

export default Testimonial;
