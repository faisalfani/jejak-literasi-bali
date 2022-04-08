import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import PartnerImage from 'assets/img/partner2.png';
import HeadingGradient from 'components/HeadingGradient';

const PartnerContainer = styled.div`
  background-color: white;
  height: 40vh;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  align-items: center;
  width: 100%;
`;
const StyledSlider = styled(Slider)`
  .slick-slide > div {
    margin: 0 40px;
  }
  .slick-list {
    margin: 0 -40px;
  }
`;

const Image = styled.img`
  width: 200px !important;
  height: auto;
`;

const Partner = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <PartnerContainer>
      <HeadingGradient>Partner Kami</HeadingGradient>
      <div className='container'>
        <StyledSlider {...settings}>
          <Image src={PartnerImage} />
          <Image src={PartnerImage} />
          <Image src={PartnerImage} />
          <Image src={PartnerImage} />
          <Image src={PartnerImage} />
          <Image src={PartnerImage} />
          <Image src={PartnerImage} />
          <Image src={PartnerImage} />
          <Image src={PartnerImage} />
        </StyledSlider>
      </div>
    </PartnerContainer>
  );
};

export default Partner;
