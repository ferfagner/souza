// ContainerStyles.ts
import styled from 'styled-components';

export const Container = styled.div`
  
  
`;
export const Body = styled.div`
  position: 'relative' ;
 
  
`;


export const Header = styled.div`
  position: 'absolute';
  top: 0;
  left: 0;
    z-index: 2;
  
`;

export const PlanosContainer = styled.div`
  background-color: ${(props) => props.theme.colors.red100};
  color: white;
  text-align: center;
  
`;

export const ZigzagLine = styled.div`
   width: 100%;
  height: 20px;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg,  ${(props) => props.theme.colors.red100} 25%, transparent 25%, transparent 50%, ${(props) => props.theme.colors.red100} 50%, ${(props) => props.theme.colors.red100} 75%, transparent 75%, transparent);
    background-size: 20px 20px;  
  }
`;






