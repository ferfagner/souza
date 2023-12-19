import styled from 'styled-components';

interface ContainerProps{
  sidebarOpen?: boolean;
}

interface OpenButtonProps{
  isActivy?: boolean;
}

export const Container = styled.div<ContainerProps>`
display: flex;
flex-direction: column;
align-items: center;
height: 100%;
   background-color: ${(props) => props.theme.colors.red150};
  color: white;
  padding: 1rem;
  width: 20rem;
  height: 100%;

  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: ${(props) => props.theme.colors.red150};
    padding: 1rem;
    display: ${(props) => (props.sidebarOpen ? 'flex' : 'none')};
  }
  
  
`;

export const Photo = styled.img`
  width: 150px;
  border-radius: 75px;


`

export const Name = styled.h3`
   padding-bottom: 2rem;

  
`



export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const MenuItem = styled.div`
width: 100%;
display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid white;
  padding: 1rem;

  &:hover {
    cursor: pointer;
   
    color: ${(props) => props.theme.colors.gray100};
  }
  
`
export const MenuTilte = styled.a`
width: 100%;
  font-size: 1rem;
 font-weight: bold;
 margin: 5px;
 color: ${(props) => props.theme.colors.white};
 text-decoration: none;

`

export const Icon = styled.div`
  font-size: 1.5rem;
`

export const LogOut = styled.button`
  width: 100%;
  height: 2.5rem;
  font-size: 1.5rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.white};
  
  &:hover {
    cursor: pointer;
    border-bottom: 2px solid white;
    background-color: ${(props) => props.theme.colors.gray100};
  }
  
`

export const Footer = styled.div`
  width: 100%;
  padding-top: 2.5rem;
`
export const OpenButton = styled.button<OpenButtonProps>`
  position: absolute;
 display: flex;
 align-items: center;
 z-index: 100;
  height: 80px;
  width: 80px;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 25px;
  color: ${(props) => (props.isActivy ? props.theme.colors.red150 :  props.theme.colors.white)};
  background-color: ${(props) => (props.isActivy ? props.theme.colors.white :  props.theme.colors.red150)};
  border-radius: 40px;
  margin-left: -40px;

  @media (min-width: 768px) {
    display: none;
    
    display: none
  }
`;

export const IconOpen = styled.div`
  display: flex;
  margin-left: 2rem;
  width: 100%;
  
  font-size: 2rem;
  
  `