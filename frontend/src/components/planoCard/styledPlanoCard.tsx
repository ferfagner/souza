import styled from 'styled-components';

interface CardProps{
  especial?: boolean;
}


export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ButtonContainer = styled.div`
  
  margin-top: auto; /* Isso empurra o botão para o final do contêiner */
  margin-bottom: 0px;
  width: 100%;
`;

export const Card = styled.div<CardProps>`
position: relative;
display: flex;
flex-direction: column;
background-color: ${(props) => props.especial === true ?  props.theme.colors.black50 :  props.theme.colors.white };
color: ${(props) => props.especial === true ?  props.theme.colors.white :  props.theme.colors.black50 };
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
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const FeaturesList = styled.ul`
  list-style-type: none;
  padding: 1rem;
  margin: 0;
  text-align: left;

  li {
    margin-bottom: 5px;
    margin: 1.5rem 0 1.5rem 0;
  }
`;