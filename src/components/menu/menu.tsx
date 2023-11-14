import { useState } from 'react';
import {NavbarContainer,LogoImg, MenuIcon,OMenu, MenuItem, LoginButton} from './styledmenu'
import Logo from '../../assets/logo1.webp'




export default function Menu () {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
        setMenuOpen((prevMenuOpen) => !prevMenuOpen);
    };
  
    return (
        
      <NavbarContainer>
        <LogoImg src={Logo}/>
        <MenuIcon onClick={toggleMenu}>Menu</MenuIcon>
        <OMenu omenuOpen={menuOpen}>
          <MenuItem href="/">Home</MenuItem>
          <MenuItem href="#">Vantagens</MenuItem>
          <MenuItem href="#">Como Funciona</MenuItem>
          <MenuItem href="#">Contato</MenuItem>
          <LoginButton href="/login">Area do Cliente</LoginButton>
        </OMenu>
       
      </NavbarContainer>
      
      
    );
  };
  