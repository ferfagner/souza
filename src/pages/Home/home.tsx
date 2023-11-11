import Menu from '../../components/menu/menu'
import Sliders from '../../components/sliders/sliders'
import {Body,Header,Container} from './styleshome'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function Home() {

  const carouselItems = [
    'https://www.vounajanela.com/wp-content/uploads/2015/03/fotos.jpg',
    'https://www.vounajanela.com/wp-content/uploads/2015/03/fotos.jpg',
    'https://www.vounajanela.com/wp-content/uploads/2015/03/fotos.jpg',
    // Adicione mais URLs de imagens conforme necessário
  ];

  return (
    <Container>
      <Header>
      <Menu/>
      </Header>
    <Body>
    <Sliders items={carouselItems}/>
    </Body>
    </Container>
   
  )
}

