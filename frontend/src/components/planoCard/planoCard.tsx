import Button from '../button/button';
import { Container, ButtonContainer, Card, FeaturesList, PriceText, Title } from './styledPlanoCard'
import { AiOutlineCheck } from "react-icons/ai";

interface PriceProps {
    title: string;
    price: string;
    features: string[];
    especial?: boolean
}

interface PriceTableProps {
    prices: PriceProps[];
}

export default function PlanoCard({ prices }: PriceTableProps) {
    return (
        <Container>
            {prices.map((price, index) => (
                <Card key={index} especial={price.especial}>
                    <Title>{price.title}</Title>
                    <PriceText>{price.price}</PriceText>
                    <FeaturesList>
                        {price.features.map((feature, i) => (
                            <li key={i}><AiOutlineCheck/> {feature}</li>
                        ))}
                    </FeaturesList>
                    <ButtonContainer>
                        <Button
                            type='submit'
                            onClick={() => { }}
                        >
                            Assinar!
                        </Button>
                    </ButtonContainer>
                </Card>
            ))}

        </Container>
    )
}