import React from 'react';
import styled from 'styled-components';
import PartnerImage from 'assets/img/partner2.png';
import Marquee from 'react-fast-marquee';

const PartnerContainer = styled.div`
  background-color: white;
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 3rem;
  align-items: center;
  width: 100%;
`;

const Image = styled.img`
  width: 200px !important;
  height: auto;
`;

const Partner = () => {
  return (
    <PartnerContainer>
      <div className='container'>
        <Marquee gradient>
          <Image src={PartnerImage} />
          <Image src={PartnerImage} />
          <Image src={PartnerImage} />
          <Image src={PartnerImage} />
          <Image src={PartnerImage} />
          <Image src={PartnerImage} />
          <Image src={PartnerImage} />
        </Marquee>
      </div>
    </PartnerContainer>
  );
};

export default Partner;
