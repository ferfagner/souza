
import {Container,SidebarContent, Body} from './styledInvoices'
import Sidebar from '../../components/sidelbar/sidebar'
import { getCobrancas} from '../../api/servicesApi'
import {useAuth} from '../../hooks/auth'
import {useEffect, useState} from 'react'
import Menu from '../../components/menu/menu';
import { PaymentDTO } from '../../DTO/paymentsDTO'
import InvoicesBox from '../../components/invoicesBox/invoicesBox'

export default function Invoices(){
    
    const {user} = useAuth()
    const [payment, setPayment] = useState<PaymentDTO[]>([])


      async function getPays() {
        try {
          const response = await getCobrancas(user.idAsaas);

          setPayment(response.data);
        } catch (error) {
          console.error("Erro ao buscar assinaturas:", error);
          // Trate o erro conforme necessário
        }
      }
      
      	console.log(payment)
    
    useEffect(()=>{
        getPays()
    },[])

    if (!payment) {
        return <div className="loading">Carregando...</div>;
      }

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
        <Body>
        {payment.map((item) => (
        <InvoicesBox data={item}/>
      ))}
          
        </Body>
        </Container>
        </>
    )
}