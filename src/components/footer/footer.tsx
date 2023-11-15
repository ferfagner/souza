import { FooterContainer,Separator, Column, Title, ButtomFooter } from './styledfooter'


export default function Footer() {
    return (
        <>
        <FooterContainer>
            <Column>
                <Title>A Empresa</Title>
                <p>A Souza Rastreamentos é uma empresa de Monitoramento e Rastreamento Veicular, fundada em 2020. Atendemos todo o Brasil, oferecendo soluções confiáveis para proteção de veículos particulares e frotas.</p>
            </Column>
            <Column>
                <Title>Atendimento</Title>
                <p>Aberto: Segunda a Sábado</p>
                <p>Horário: das 8hs as 18hs</p>
                <br/>
                <p>Endereço: St. Res. Oeste / Vila NS de Fátima Q G, Vila Nossa Sra. de Fátima, Brasília DF, 73340-710.</p>
            </Column>
            <Column>
                <Title>Ajuda</Title>
                <p>Entre em Contato</p>
            </Column>
            <Column>
                <Title>Contato</Title>
                <p>Email:
                    comercial@souzarastreamentos.com.br</p>
                    <br/>
                <p>Telefone:
                    (61) 99607-5545</p>
            </Column>
        </FooterContainer>
        <ButtomFooter>
            <Separator/>
            <p>Todos os direitos reservados @Ferfagner</p>
        </ButtomFooter>
        </>
    )
}