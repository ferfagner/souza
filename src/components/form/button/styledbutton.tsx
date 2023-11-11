
import styled from 'styled-components';


export const Container = styled.button`

    width: 100%;
    height: 3rem;
    margin-bottom: 5rem;
    border-radius: 5px;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.red100};
  


  &:hover {
    cursor: pointer;
    border-bottom: 2px solid white;
    background-color: ${(props) => props.theme.colors.red200};
  }
    
 
`;