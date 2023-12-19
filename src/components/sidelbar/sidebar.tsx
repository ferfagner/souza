import {Container,OpenButton, IconOpen,Footer,Photo, Name, Icon,LogOut,MenuTilte, MenuContainer, MenuItem} from './stylersildebar'
import { useNavigate } from 'react-router-dom';
import {useAuth} from '../../hooks/auth'
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";
interface SidebarProps{
    photo: string,
    name: string,
}import { MdAssignment } from "react-icons/md";
import { useState} from 'react'


export default function Sidebar({photo, name}:SidebarProps){
    const navigate = useNavigate()
    const {logOut} = useAuth()
    const[sidebarActiv, setSidebarActivi] = useState(false)
    function logout (){

        logOut()

        navigate('/')
    }
    

    return(
        <>
        <OpenButton isActivy={sidebarActiv} onClick={()=> {setSidebarActivi(!sidebarActiv)}}>
        <IconOpen>{sidebarActiv ?
        <MdKeyboardDoubleArrowLeft/>:
            <MdKeyboardDoubleArrowRight/>
        }
        </IconOpen>
    </OpenButton>
        <Container sidebarOpen={sidebarActiv}>
            <Photo src={photo}/>
            <Name>{name}</Name>
            <MenuContainer>
                 <MenuItem>
                <Icon>
                <MdAssignment/>
                </Icon>
                <MenuTilte href='/dashboard'>Dashboard</MenuTilte>
                </MenuItem>

                <MenuItem>
                <Icon>
                <MdAssignment/>
                </Icon>
                <MenuTilte>Assinaturas</MenuTilte>
                </MenuItem>

                <MenuItem>
                <Icon>
                <MdAssignment/>
                </Icon>
                <MenuTilte href='/invoices'>Faturas</MenuTilte>
                </MenuItem>

                <MenuItem>
                <Icon>
                <MdAssignment/>
                </Icon>
                <MenuTilte>Formas de Pagamento</MenuTilte>
                </MenuItem>

                <MenuItem>
                <Icon>
                <MdAssignment/>
                </Icon>
                <MenuTilte>Configurações</MenuTilte>
                </MenuItem>
                
                
            </MenuContainer>
            <Footer>
            <LogOut onClick={()=>logout()}>
                Sair
            </LogOut>
            </Footer>
        </Container>
        </>
    )
}