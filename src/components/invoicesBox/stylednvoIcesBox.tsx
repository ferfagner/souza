import styled from "styled-components";

interface ContainerProps{
  status: string
}

export const Container = styled.div<ContainerProps>`
 background-color: ${(props) => {
    switch (props.status) {
      case 'PENDING':
        return props.theme.colors.gray200
        case 'OVERDUE':
            return props.theme.colors.red100
          case 'RECEIVED':
            return props.theme.colors.green150
          case 'CANCELLED':
            return props.theme.colors.black100
          default:
            return 'Status Desconhecido'
        }
      }};
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

