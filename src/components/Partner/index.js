import React from 'react';
import styled from 'styled-components';
import PartnerImage from 'assets/img/partner2.png';
import Marquee from 'react-fast-marquee';
import Devices from 'utils/Devices';
import HeadingGradient from 'components/HeadingGradient';

const PartnerContainer = styled.div`
  background-color: white;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 3rem;
  align-items: center;
  width: 100%;
  ${Devices.phone} {
    height: auto;
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
  return (
    <PartnerContainer>
      <HeadingGradient>Media Partner</HeadingGradient>
      <div className='container'>
        <Marquee gradient pauseOnHover>
          <Image
            onClick={() => window.open('https://google.com')}
            src={PartnerImage}
          />
          <Image
            onClick={() => window.open('https://google.com')}
            src={PartnerImage}
          />
          <Image
            onClick={() => window.open('https://google.com')}
            src={PartnerImage}
          />
          <Image
            onClick={() => window.open('https://google.com')}
            src={PartnerImage}
          />
          <Image
            onClick={() => window.open('https://google.com')}
            src={PartnerImage}
          />
          <Image
            onClick={() => window.open('https://google.com')}
            src={PartnerImage}
          />
          <Image
            onClick={() => window.open('https://google.com')}
            src={PartnerImage}
          />
        </Marquee>
      </div>
    </PartnerContainer>
  );
};

export default Partner;
