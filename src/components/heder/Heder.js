import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';
import {
    Nav,
    Logo,
    MobileIcon,
    Menu,
    MenuItem,
    UserIcon,
    IconsWrapper,
    MenuItemMobil
} from './StyleHeder';

const Heder = ({ onLoginClick }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleUserIconClick = () => {
        onLoginClick();
        if (menuOpen) {
            setMenuOpen(false); // Zamknij menu po kliknięciu ikonki logowania tylko jeśli jest otwarte
        }
    };

    return (
        <Nav>
            <Link to={'/'}>
                <Logo src="./img/1.png" alt="Logo"/>
            </Link>

            <IconsWrapper>
                <UserIcon style={{ fontSize: '25px' }}>
                    <FaUser onClick={handleUserIconClick} />
                </UserIcon>

                <MobileIcon onClick={toggleMenu}>
                    {menuOpen ? (
                        <FaTimes style={{ fontSize: '30px' }} />
                    ) : (
                        <FaBars style={{ fontSize: '30px' }} />
                    )}
                </MobileIcon>
            </IconsWrapper>
            <Menu open={menuOpen}>
                <MenuItem to={'/'}>Menu</MenuItem>
                <MenuItem to={'/dostawy'}>Dostawy</MenuItem>
                <MenuItem to={'/kontakt'}>Kontakt</MenuItem>
                <MenuItem to={'/rezerwacje'}>Rezerwacje</MenuItem>

                <MenuItemMobil onClick={onLoginClick} $mobile={false}>
                    Zarejestruj się
                </MenuItemMobil>
            </Menu>
        </Nav>
    );
};

export default Heder;
