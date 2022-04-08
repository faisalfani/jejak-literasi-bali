import colors from 'constants/colors';
import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import PartnerImage from 'assets/img/partner.png';

const PartnerContainer = styled.div`
  background-color: ${colors.primary};
  height: 20vh;
  display: flex;
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
  width: 124px !important;
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
