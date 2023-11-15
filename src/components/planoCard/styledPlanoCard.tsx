import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  color: ${(props) => props.theme.colors.black100}
`;

export const ButtonContainer = styled.div`
margin-top: auto; /* Isso empurra o botão para o final do contêiner */
  margin-bottom: 0px;
`;

export const Card = styled.div`
position: relative;
background-color: ${(props) => props.theme.colors.white};
  width: 400px;
  margin: 20px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const PriceText = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const FeaturesList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 5px;
  }
`;