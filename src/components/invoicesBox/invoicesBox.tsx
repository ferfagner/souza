import Button from '../button/button'
import {Container, RigthInfo, LeftInfo, StyledH3, StyledH2, StyledH1} from './stylednvoIcesBox'
import {PaymentDTO} from '../../DTO/paymentsDTO'

interface dataProrps{
    data:PaymentDTO
}

export default function InvoicesBox({data}:dataProrps){


    return(
        <Container>
            <RigthInfo>
            <StyledH3>Código:</StyledH3>
            <StyledH2>{data.id}</StyledH2>
            <StyledH3>Data de Vencimento:</StyledH3>
            <StyledH2>{data.dueDate}</StyledH2>
            <StyledH3>Status:</StyledH3>
            <StyledH2>{data.status === 'PENDING' ? 'Aguardando Pagamento' : data.status}</StyledH2>
            </RigthInfo>

            <LeftInfo>
           
            <StyledH3>Valor:</StyledH3>
            <StyledH1>R${data.value}</StyledH1>
            <StyledH3>Forma de Pagamento:</StyledH3>
            <StyledH1>{data.billingType === 'CREDIT_CARD'? 'Cartão de Credito': data.billingType}</StyledH1>
            
            <Button
            type='button'
            
            onClick={()=> window.open(data.invoiceUrl, '_blank')}
            >
                Pague Agora!
            </Button>
            </LeftInfo>
        </Container>
    )
}