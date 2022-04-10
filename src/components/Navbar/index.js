import { debounce } from 'lodash';
import React, { useEffect, useState } from 'react';
import Logo from '../../assets/img/jejak-logo.png';
import { NavbarNav, NavBrand, NavContainer, NavLink } from './styled';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isStopScroll, setIsStopScroll] = useState(false);
  const handleScroll = () => {
    setIsStopScroll(false);
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener(
      'scroll',
      debounce(() => {
        setIsStopScroll(true);
      }, 1000)
    );
  });

  return (
    <NavContainer>
      <div className='d-flex justify-content-center align-items-center p-1'>
        <NavBrand src={Logo} alt='jejak literasi logo' />
      </div>
      <NavbarNav id='navbar' scrolled={scrolled} isStopScroll={isStopScroll}>
        <NavLink isActive>
          <a href='#beranda'>Beranda</a>
        </NavLink>
        <NavLink>
          <a href='#aboutUs'>Tentang Kami </a>
        </NavLink>
        <NavLink>
          <a href='#ourProgram'>Program Kami</a>
        </NavLink>
        <NavLink>
          <a href='#documentation'>Dokumentasi</a>
        </NavLink>
        <NavLink>
          <a href='#testimonial'>Kata Mereka</a>
        </NavLink>
        <NavLink>
          <a href='#joinUs'>Gabung Relawan</a>
        </NavLink>
      </NavbarNav>
    </NavContainer>
  );
};

export default Navbar;
