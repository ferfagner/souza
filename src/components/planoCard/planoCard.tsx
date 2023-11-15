import Button from '../button/button';
import { Container, ButtonContainer, Card, FeaturesList, PriceText, Title } from './styledPlanoCard'

interface PriceProps {
    title: string;
    price: string;
    features: string[];
}

interface PriceTableProps {
    prices: PriceProps[];
}

export default function PlanoCard({ prices }: PriceTableProps) {
    return (
        <Container>
            {prices.map((price, index) => (
                <Card key={index}>
                    <Title>{price.title}</Title>
                    <PriceText>{price.price}</PriceText>
                    <FeaturesList>
                        {price.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
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