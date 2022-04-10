import React from 'react';
import styled from 'styled-components';
import PartnerImage from 'assets/img/partner2.png';
import Devices from 'utils/Devices';
import HeadingGradient from 'components/HeadingGradient';
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';

const PartnerContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 3rem;
  align-items: center;
  width: 100%;
  margin: 2rem 0;
  ${Devices.phone} {
    margin: 4rem 0;
  }
`;

const Image = styled.img`
  width: 200px;
  height: auto;
  cursor: pointer;
  ${Devices.phone} {
    width: 150px;
  }
`;

const Partner = () => {
  const isMobile = useMediaQuery({ maxWidth: 480 });

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 3 : 5,
    slidesToScroll: 1,
  };
  return (
    <PartnerContainer>
      <HeadingGradient>Media Partner</HeadingGradient>
      <div className='container'>
        <Slider {...settings}>
          <a href='https://google.com'>
            <Image src={PartnerImage} />
          </a>
          <a href='https://google.com'>
            <Image src={PartnerImage} />
          </a>
          <a href='https://google.com'>
            <Image src={PartnerImage} />
          </a>
          <a href='https://google.com'>
            <Image src={PartnerImage} />
          </a>
          <a href='https://google.com'>
            <Image src={PartnerImage} />
          </a>
          <a href='https://google.com'>
            <Image src={PartnerImage} />
          </a>
        </Slider>
      </div>
    </PartnerContainer>
  );
};

export default Partner;
