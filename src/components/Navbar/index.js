import React from 'react';
import Logo from '../../assets/img/jejak-logo.png';
import { NavbarNav, NavBrand, NavContainer, NavLink } from './styled';

const Navbar = () => {
  return (
    <NavContainer>
      <div className='d-flex justify-content-center align-items-center p-1'>
        <NavBrand src={Logo} alt='jejak literasi logo' />
      </div>
      <NavbarNav>
        <NavLink isActive>Home</NavLink>
        <NavLink>Tentang Kami</NavLink>
        <NavLink>Program Kami</NavLink>
        <NavLink>Dokumentasi</NavLink>
        <NavLink>Kata Mereka</NavLink>
        <NavLink>Gabung Relawan</NavLink>
      </NavbarNav>
    </NavContainer>
  );
};

export default Navbar;
