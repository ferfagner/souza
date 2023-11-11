import {Container,Card,Cardss,Icon,Title} from './styledcards'
import { ReactNode } from 'react';
interface CardsProps {
    items: cardProps[]; 
}

interface cardProps{
  Icon: ReactNode,
  titulo: string,
 
}  

export function Cards({items}: CardsProps){

   

    return(

        <Container>
      <Cardss>
        {items.map((card, index) => (
          <Card key={index}>
            <Icon>
            {card.Icon}
            </Icon>
            <Title>{card.titulo}</Title>
          </Card>
        ))}
      </Cardss>
    </Container>
    )
}