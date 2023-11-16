import styled from 'styled-components';

export const FooterContainer = styled.footer`
    display: flex;
    background-color: ${(props) => props.theme.colors.black50};
  color: white;
  padding: 3rem;
`;

export const Column = styled.div`
  flex: 1;
  padding: 0 20px;
`;

export const Title = styled.h4`
  color: ${(props) => props.theme.colors.red100  };
`;

export const Separator = styled.div`
width: 80%;
height: 0.1rem;
background-color: ${(props) => props.theme.colors.white };
  
`;

export const ButtomFooter = styled.div`
padding: 2rem;
display: flex;
flex-direction: column;
justify-content: space-between;
  background-color: ${(props) => props.theme.colors.black50};
  color: ${(props) => props.theme.colors.white };
  align-items: center;
`;