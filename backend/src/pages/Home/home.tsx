import Menu from '../../components/menu/menu'
import Sliders from '../../components/sliders/sliders'
import {Body,Header,Container,PlanosContainer,ZigzagLine} from './styleshome'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Cards } from '../../components/cards/cards';
import {FiAlertTriangle,FiDollarSign,FiMapPin, FiVideo,FiXCircle,FiPhoneCall } from 'react-icons/fi';
import PlanoCard from '../../components/planoCard/planoCard';
import Footer from '../../components/footer/footer';


export default function Home() {

  const carouselItems = [
  {
      srcimg: 'https://db-souza.fly.dev/api/files/heroContainer/v416hwb2b785u5l/hero_yO9QQKOBL9.png',
  titulo: 'PROTEÇÃO AO SEU ALCANCE!',
  subtitulo: 'Preocupado com os altos índices de roubos de veículos no Brasil?',
  button:'Proteja seu patrimonio Agora!',
  link:'#',
    }
  ];
    const cards = [
      {
        Icon: <FiDollarSign />,
        titulo: 'Economia de Custos',
        },
        {
          Icon: <FiMapPin />,
          titulo: 'Localização em Tempo Real',
          },
          {
            Icon: <FiVideo />,
            titulo: 'Monitoramento 24/7',
            },
            {
              Icon: <FiXCircle />,
              titulo: 'Bloqueio Veicular',
              },
              {
                Icon: <FiAlertTriangle />,
                titulo: 'Alertas de Movimentação',
                },
                {
                  Icon: <FiPhoneCall />,
                  titulo: '0800 - Recuperação Rápida',
                  }
    
   
    // Adicione mais URLs de imagens conforme necessário
  ];

  const prices = [
    {
      title: 'Plano 01',
      price: 'R$ 20,90/mês',
      features: ['Equipamento próprio incluso', 'Monitoramento em tempo real', 'Garantia do equipamento (3 meses)', '1ª mensalidade após 30 dias', 'Sem fidelidade', 'Sem bloqueio veicular'],
    },
    {
      title: 'Frota',
      price: 'Especial',
      especial: true, 
      features: ['Monitoramento em tempo real', 'Monitoramento em tempo real', 'Bloqueio veicular', 'Garantia do equipamento', '1ª mensalidade após 30 dias'],
    },
    {
      title: 'Plano 03',
      price: 'R$ 59,90/mês',
      features: ['Monitoramento em tempo real', 'Equipamento comodato', 'Bloqueio veicular', '1ª mensalidade após 30 dias', 'Equipamento garantido enquanto usar o rastreador', 'Fidelidade de 12 meses'],
    },
  ];

  return (
    <Container>
      <Header>
      <Menu/>
      </Header>
    <Body>
    <Sliders items={carouselItems}/>
    <Cards items={cards}/>
    <ZigzagLine/>
    <PlanosContainer>
      <h2>Nossos Planos</h2>
      <PlanoCard prices={prices}/>
    </PlanosContainer>
    <ZigzagLine/>
    </Body>
    <Footer/>
    </Container>
   
  )
}

