import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from 'assets/img/jejak-logo.png';
import { Facebook, Instagram, Twitter } from 'react-feather';
import Text from 'components/Text';
import colors from 'constants/colors';
import Devices from 'utils/Devices';
import { useMediaQuery } from 'react-responsive';
import { paramUrl } from 'utils/paramUrl';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 0;
  width: 100%;
  align-items: center;
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

const SubmitButton = styled.button`
  border: solid ${colors.primary} 1px;
  border-radius: 5px;
  background-color: white;
  padding: 4px 10px;
  display: inline-block;
  width: fit-content;
  color: ${colors.primary};
  transition: all 0.5s;
  :hover {
    background: linear-gradient(97.49deg, #7c2fdf 37.83%, #984ec1 132.31%);
    color: white;
  }
  ${Devices.phone} {
    width: 100%;
  }
`;

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 480 });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  const handleContactUsClicked = () => {
    setIsSubmit(true);
    const waParam = {
      text,
    };
    if (name && email && text) {
      window.open(
        `https://api.whatsapp.com/send?phone=6280008008&${paramUrl(waParam)}`
      );
    }
  };

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
            <FooterItem>
              <a href='facebook.com'>
                <Text size='0.9rem'>Beranda</Text>
              </a>
            </FooterItem>
            <FooterItem>
              <a href='facebook.com'>
                <Text size='0.9rem'>Tentang Kami</Text>
              </a>
            </FooterItem>
            <FooterItem>
              <a href='facebook.com'>
                <Text size='0.9rem'>Program Kami</Text>
              </a>
            </FooterItem>
            <FooterItem>
              <a href='facebook.com'>
                <Text size='0.9rem'>Dokumentasi</Text>
              </a>
            </FooterItem>
            <FooterItem>
              <a href='facebook.com'>
                <Text size='0.9rem'>Kata Mereka</Text>
              </a>
            </FooterItem>
            <FooterItem>
              <a href='facebook.com'>
                <Text size='0.9rem'>Gabung Relawan</Text>
              </a>
            </FooterItem>
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
            <Text style={{ marginTop: '1rem' }} weight='700'>
              Contact Us
            </Text>
            <div class='form-group'>
              <input
                type='text'
                class={`form-control ${isSubmit && !name && 'is-invalid'}`}
                id='nameInput'
                placeholder='Name'
                value={name}
                onChange={({ target }) => setName(target.value)}
              />
            </div>
            <div class='form-group'>
              <input
                type='email'
                class={`form-control ${isSubmit && !email && 'is-invalid'}`}
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
                placeholder='Email'
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              />
            </div>
            <div class='form-group'>
              <textarea
                class={`form-control ${isSubmit && !text && 'is-invalid'}`}
                id='exampleFormControlTextarea1'
                rows='3'
                placeholder='Pesan'
                value={text}
                onChange={({ target }) => setText(target.value)}
              ></textarea>
            </div>
            <SubmitButton
              type='submit'
              class='btn btn-primary'
              onClick={handleContactUsClicked}
            >
              Submit
            </SubmitButton>
          </FooterItemWrapper>
        </FooterBrand>
      </div>
      <Text color={colors.primary}>&copy; 2022 by Jejak Literasi Bali</Text>
    </FooterContainer>
  );
};

export default Footer;
