import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  
`;


export const Body = styled.div`
  flex: 1;
  padding: 1rem;
 
  
`;

export const SidebarContent = styled.div`
  
 
  
`;



export const BoxContainer = styled.div`
   display: flex;
  flex-direction: column; 
  
  
  @media (min-width: 768px) {
    flex-direction: row; 
    
  }
`;


