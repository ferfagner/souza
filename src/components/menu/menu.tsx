import { useState } from 'react';
import {NavbarContainer,Padding,LogoImg, MenuIcon,OMenu, MenuItem, LoginButton} from './styledmenu'
import Logo from '../../assets/logo1.webp'



export default function Menu () {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
        setMenuOpen((prevMenuOpen) => !prevMenuOpen);
    };
  
    return (
        
      <NavbarContainer>
        <Padding>
        <LogoImg src={Logo}/>
        <MenuIcon onClick={toggleMenu}>Menu</MenuIcon>
        <OMenu omenuOpen={menuOpen}>
          <MenuItem href="#">Home</MenuItem>
          <MenuItem href="#">About</MenuItem>
          <MenuItem href="#">Services</MenuItem>
          <MenuItem href="#">Contact</MenuItem>
        </OMenu>
        </Padding>
        <LoginButton >Login</LoginButton>
      </NavbarContainer>
      
      
    );
  };
  