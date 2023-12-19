
import {Container,SidebarContent, Body, BoxContainer} from './styleddashboard'
import Sidebar from '../../components/sidelbar/sidebar'
import {getAssinaturas, getCobrancas} from '../../api/servicesApi'
import {useAuth} from '../../hooks/auth'
import {useEffect, useState} from 'react'
import Menu from '../../components/menu/menu';
import Box from '../../components/box/box';
import { MdAssignmentTurnedIn } from "react-icons/md";
import { FaRegCalendarTimes, FaCar } from "react-icons/fa";
import {AssinaturasDTO} from '../../DTO/assinaturaDTO'
import { BasePaymentDTO } from '../../DTO/paymentsDTO'

export default function Dashboard(){
    
    const {user} = useAuth()
    const [assinatura, setAssinaturas] = useState<AssinaturasDTO>()
    const [payment, setPayment] = useState<BasePaymentDTO>()



    async function getAss() {
        try {
          const response = await getAssinaturas(user.idAsaas);
          setAssinaturas(response);
        } catch (error) {
          console.error("Erro ao buscar assinaturas:", error);
          // Trate o erro conforme necessário
        }
      }

      async function getPays() {
        try {
          const response = await getCobrancas(user.idAsaas);

          setPayment(response);
        } catch (error) {
          console.error("Erro ao buscar assinaturas:", error);
          // Trate o erro conforme necessário
        }
      }
      

      
    
    
    useEffect(()=>{
        getPays()
        getAss()
    },[])

    return(
        <>
        <Menu/>
        <Container>
           <SidebarContent>
           
        <Sidebar
        photo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuZqJsPamSfzJXh5NDw_yneYrucJyYQyDg2g&usqp=CAU'
        name={user.nome}
        />
       </SidebarContent>
       {assinatura?
       <Body>
       <BoxContainer>
       <Box 
       Icon={MdAssignmentTurnedIn}
       valor={String(assinatura?.totalCount)}
       title='Assinaturas'
       />
       <Box 
       Icon={FaRegCalendarTimes}
       valor={String(payment?.totalCount)}
       title='Faturas'
       />
       <Box 
       Icon={FaCar}
       valor='0'
       title='Carros'
       />
       </BoxContainer>
      </Body>:
       <Body>
      <div className="loading">Carregando...</div>
      </Body>
      }
        
        </Container>
        </>
    )
}