import styled from 'styled-components';


export const Container = styled.div`

 text-align: center;
  padding: 20px;
`;

export const Cardss = styled.div`
 text-align: center;
 justify-content: center;
align-items: center;
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.div`
 width: 30rem;
  padding: 20px;
  margin-top: 1rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.red50};
  transition: transform 0.2s ease-in-out;
  border: none;
`;


export const Title = styled.h3`
 color: ${(props) => props.theme.colors.white};
`;

export const Icon = styled.div`
color: ${(props) => props.theme.colors.white};
 font-size: 5rem;
`;