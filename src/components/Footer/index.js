import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from 'assets/img/jejak-logo.png';
import { Facebook, Instagram, Twitter } from 'react-feather';
import Text from 'components/Text';
import colors from 'constants/colors';
import Devices from 'utils/Devices';
import { useMediaQuery } from 'react-responsive';
import { paramUrl } from 'utils/paramUrl';
import router from 'components/Navbar/router';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 0;
  width: 100%;
  align-items: center;
  background-color: ${colors.primary}30;
`;

const FooterBrand = styled.div`
  display: flex;
  justify-content: space-between;
  ${Devices.phone} {
    flex-direction: column;
    align-items: center;
    row-gap: 2rem;
  }
`;

const FooterItemWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  ${Devices.phone} {
    align-items: center;
    text-align: center;
    padding: 0;
  }
  .form-group {
    width: 100%;
  }
`;

const FooterItem = styled.li`
  display: flex;
  column-gap: 8px;
  align-items: center;
  a {
    text-decoration: none;
  }
`;

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 480 });

  return (
    <FooterContainer>
      <div className='container'>
        <FooterBrand>
          <img
            src={Logo}
            alt='jejak literasi logo'
            width={isMobile ? '200px' : '100px'}
            height={isMobile ? '160px' : '80px'}
          />

          <FooterItemWrapper>
            <Text weight='700'>Navigasi</Text>
            {router.map((data) => (
              <FooterItem>
                <a href={data.path}>
                  <Text size='0.9rem'>{data.name}</Text>
                </a>
              </FooterItem>
            ))}
          </FooterItemWrapper>
          <FooterItemWrapper>
            <Text weight='700'>Sosial Media</Text>
            <FooterItem>
              <Facebook size={20} />
              <a href='facebook.com'>
                <Text size='0.9rem'>Jejak Literasi Bali</Text>
              </a>
            </FooterItem>
            <FooterItem>
              <Twitter size={20} />
              <a href='facebook.com'>
                <Text size='0.9rem'>Jejak Literasi Bali</Text>
              </a>
            </FooterItem>
            <FooterItem>
              <Instagram size={20} />
              <a href='facebook.com'>
                <Text size='0.9rem'>Jejak Literasi Bali</Text>
              </a>
            </FooterItem>
          </FooterItemWrapper>
          <FooterItemWrapper>
            <Text weight='700'>Alamat</Text>
            <Text>
              Jl. Pulau Saelus I No.18, Pedungan, Denpasar Selatan, Kota
              Denpasar, Bali 80114
            </Text>
          </FooterItemWrapper>
        </FooterBrand>
      </div>
      <Text color={colors.primary}>&copy; 2022 by Jejak Literasi Bali</Text>
    </FooterContainer>
  );
};

export default Footer;
