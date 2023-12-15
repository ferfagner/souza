
import {Container, Body} from './styleddashboard'
import Sidebar from '../../components/sidelbar/sidebar'
import {getAssinaturas} from '../../api/servicesApi'
import {useAuth} from '../../hooks/auth'
import { useNavigate } from 'react-router-dom';
import {useEffect} from 'react'

  

export default function Dashboard(){
    const navigate = useNavigate()
    const {user, logOut} = useAuth()

    

    function logout (){

        logOut()

        navigate('/')
    }

    useEffect(()=>{
        console.log(getAssinaturas(user.idAsaas)) 

    },[])

  

    return(
        <Container>
           
        <Sidebar/>
       
        <Body>
            <h2><button onClick={()=> logout()}>Logout</button></h2>
        </Body>
        </Container>
    )
}