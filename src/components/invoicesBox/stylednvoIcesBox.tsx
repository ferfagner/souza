import styled from "styled-components";

export const Container = styled.div`
        background-color: ${(props) => props.theme.colors.red150};
        height: 15rem;
        width: 90%;
        display: flex;
        align-items: center;
        border-radius: 10px;
        color: ${(props) => props.theme.colors.white};
        margin-top: 1rem;

        @media (max-width: 768px) {
            display: block;
            height: 40rem;
            justify-content: center;
            width: 80%;
            padding: 2rem;
            
  }

  

`

export const RigthInfo = styled.div`
      width: 30%;
      @media (max-width: 768px) {
        width: 90%;   
  }

`

export const LeftInfo = styled.div`
      width: 30%; 
      @media (max-width: 768px) {
        width: 90%;   
  }

`

export const StyledH3 = styled.h3`
    
  font-size: 1em; 
`;

export const StyledH1 = styled.h3`
  font-size: 2em;
  margin-bottom: 1rem;
`;


export const StyledH2 = styled.h3`
   margin-bottom: 1rem;
  font-size: 1.5em;
`;

