import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  align-items: center;
`;

export const NavBrand = styled.img`
  width: 120px;
  height: auto;
  cursor: pointer;
`;

export const NavbarNav = styled.ul`
  padding: 1rem 4rem;
  list-style: none;
  display: ${(props) =>
    props.isStopScroll && props.scrolled ? 'none' : 'flex'};
  justify-content: center;
  width: 100%;
  column-gap: 2rem;
  background: linear-gradient(97.49deg, #7c2fdf 37.83%, #984ec1 132.31%);
  box-shadow: 0px 6px 40px rgba(0, 0, 0, 0.2);
  margin-bottom: 0;
  position: ${(props) => props.scrolled && 'fixed'};
  top: ${(props) => props.scrolled && 0};
  z-index: 100;
  transition: all 1s;
`;

export const NavLink = styled.li`
  display: inline-block;
  cursor: pointer;
  a {
    color: white;
    font-weight: ${(props) => (props.isActive ? 700 : 500)};
    text-decoration: none;
  }
`;
