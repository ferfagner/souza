import Menu from '../../components/menu/menu'
import Sliders from '../../components/sliders/sliders'
import {Body,Header,Container} from './styleshome'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Cards } from '../../components/cards/cards';
import {FiAlertTriangle,FiDollarSign,FiMapPin, FiVideo,FiXCircle,FiPhoneCall } from 'react-icons/fi';


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

  return (
    <Container>
      <Header>
      <Menu/>
      </Header>
    <Body>
    <Sliders items={carouselItems}/>
    <Cards items={cards}/>
    </Body>
    </Container>
   
  )
}

