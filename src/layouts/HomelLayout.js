import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import { Menu, X } from 'react-feather';
import Logo from 'assets/img/jejak-logo.png';
import Text from 'components/Text';
import router from 'components/Navbar/router';
import { debounce } from 'lodash';

const MobileNavbar = styled.div`
  height: 8vh;
  background: linear-gradient(97.49deg, #7c2fdf 37.83%, #984ec1 132.31%);
  display: flex;
  align-items: center;
  padding: 0 1rem;
`;

const Sidebar = styled.div`
  position: fixed;
  left: ${(props) => (props.isOpen ? '0' : '-60vw')};
  top: 0;
  height: 100%;
  width: 60vw;
  background-color: white;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  z-index: 1000;
  box-shadow: 0px 16px 40px rgba(0, 0, 0, 0.12);
`;

const NavContainer = styled.div`
  height: 95%;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  row-gap: 4rem;
`;

const NavBrand = styled.img`
  width: 120px;
  height: auto;
  cursor: pointer;
`;

const CloseButton = styled.span`
  position: absolute;
  top: -20px;
  right: -10px;
`;

const NavItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const NavItem = styled.a`
  text-decoration: none;
`;

const HomelLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 480 });

  return (
    <div style={{ position: 'relative' }}>
      {isMobile ? (
        <MobileNavbar id='beranda'>
          <Menu size='24' color='white' onClick={() => setIsMenuOpen(true)} />
          <Sidebar isOpen={isMenuOpen}>
            <NavContainer>
              <NavBrand src={Logo} alt='jejak literasi logo' />
              <CloseButton onClick={() => setIsMenuOpen(false)}>
                <X size='24' />
              </CloseButton>
              <NavItemContainer>
                {router.map((data) => (
                  <NavItem href={data.path}>
                    <Text href={data.path}>{data.name}</Text>
                  </NavItem>
                ))}
              </NavItemContainer>
            </NavContainer>
          </Sidebar>
        </MobileNavbar>
      ) : (
        <Navbar />
      )}
      {children}
      <Footer />
    </div>
  );
};

export default HomelLayout;
