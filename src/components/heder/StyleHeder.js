import styled from 'styled-components';
import { COLOR } from '../color';
import {Link} from 'react-router-dom';
const { white, yellow, grey,grey2} = COLOR;

export const Nav = styled.nav`
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 1rem 2rem;
 background: #131313;
 color: ${white};
 box-shadow: 0 5px 25px #252525;
`;

export const Logo = styled.img`
  width: 100px;
  margin-left: 20px;
  cursor: pointer;
  @media (max-width: 768px) {
   
   cursor: pointer;
   margin-left: 10px;
  }
 ` ;

export const MobileIcon = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

export const Menu = styled.div`
 display: flex;
 @media (max-width: 768px) {
  flex-direction: column;
  position: absolute;
  width: 100%;
  top: 110px;
  left: ${({open}) => (open ? '0' : '-100%')};
  background: #131313;
  transition: transform 0.3s ease-in-out; 
  transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(-100%)')};

  z-index: 999;
 }
`;

export const MenuItem = styled(Link)`
 text-decoration:none;
 color:${white};
  padding: 1rem 2rem;
  cursor: pointer;
 font-size: 20px;
  @media (max-width: 768px) {
    padding: 1rem;
  
  }
`;

export const MenuItemMobil = styled(MenuItem)`
 border-radius: 10px;
 padding: 1rem 1rem;
 color: ${white};
 box-shadow: 3px 3px #212121;
 font-size: 20px;
 font-weight: bold;

 &:hover {
  background-color: #212121;
 }

 @media (max-width: 768px) {
  display: ${({$mobile}) => ($mobile ? 'initial' : 'none')};
 }
`;

export const UserIcon = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

export const UserMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'block' : 'none')};
    position: absolute;
    width: 100%;
    top: 60px;
    left: 0;
    background-color: #333;
  }
`;

export const IconsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;
