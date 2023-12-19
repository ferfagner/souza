
import styled from 'styled-components';

interface ContainerProps{
  isactivy: boolean
}

export const Container = styled.button<ContainerProps>`

    width: 100%;
    height: 3rem;
    margin-bottom: 1rem;
    border-radius: 5px;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.isactivy ? props.theme.colors.gray150: props.theme.colors.red150};
  


  &:hover {
    cursor: pointer;
    border-bottom: 2px solid white;
    background-color: ${(props) => props.theme.colors.red200};
  }
    
 
`;