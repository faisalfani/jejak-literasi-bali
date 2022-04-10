import { debounce } from 'lodash';
import React, { useEffect, useState } from 'react';
import Logo from '../../assets/img/jejak-logo.png';
import router from './router';
import { NavbarNav, NavBrand, NavContainer, NavLink } from './styled';

const Navbar = () => {
  const [hash, setHash] = useState('');
  useEffect(() => {
    console.log(hash);
  }, [hash]);
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
    window.addEventListener('hashChange', setHash(document.location.hash));

    window.addEventListener(
      'scroll',
      debounce(() => {
        setIsStopScroll(true);
        if (window.pageYOffset === 0) {
          setHash('#beranda');
        }
      }, 1000)
    );
  });

  return (
    <NavContainer id='beranda'>
      <div className='d-flex justify-content-center align-items-center p-1'>
        <NavBrand src={Logo} alt='jejak literasi logo' />
      </div>
      <NavbarNav id='navbar' scrolled={scrolled} isStopScroll={isStopScroll}>
        {router.map((data) => (
          <NavLink isActive={hash === data.path}>
            <a href={data.path}>{data.name}</a>
          </NavLink>
        ))}
      </NavbarNav>
    </NavContainer>
  );
};

export default Navbar;
