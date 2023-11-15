
import {Container, Body} from './styleddashboard'
import Sidebar from '../../components/sidelbar/sidebar'
import axios from 'axios';
import { useEffect } from 'react';



export default function Dashboard(){

    function api() {
        axios.get(`https://www.bling.com.br/Api/v3/nfe`, {
          headers:{
            Authorization: 'Bearer 33ce15f75248956271f93600a6b331320e044425'
          }
        }).then((response) => {
         console.log(response)
          
        }).catch((error) => {
          console.error('Erro ao obter dados:', error);
        });
      }

      useEffect(()=>{
        api()
      },[])
    
    

    return(
        <Container>
           
        <Sidebar/>
       
        <Body>
        </Body>
        </Container>
    )
}