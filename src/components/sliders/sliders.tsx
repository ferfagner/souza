import Slider from 'react-slick'
import {ImgSlide} from './stylesliders'


interface CarouselProps {
    items: string[]; // Substitua com o tipo apropriado para seus itens de carrossel
  }

export default function Sliders({items} : CarouselProps ) {

   
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        };

    return (
        <Slider {...settings} >
        {items.map((item, index) => (
        <div key={index}>
          <ImgSlide src={item} alt={`slide ${index}`} />
        </div>
      ))}
        </Slider>
    );
  }
