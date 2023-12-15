import styled from 'styled-components';

interface PopupWrapperProps{
    isOpen : boolean
}

export const PopupWrapper = styled.div<PopupWrapperProps>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const CloseButton = styled.span`

  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 18px;
  cursor: pointer;
  color:  ${(props) => props.theme.colors.red100};
`;

export const PopupContent = styled.div`
display: flex;
flex-direction: column;
background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 300px;

`;

export const Button = styled.button`
 width: 50%;
height: 30px;
border-radius: 5px;
color: ${(props) => props.theme.colors.white};
background-color: ${(props) => props.theme.colors.red100};
cursor: pointer;
margin-top: 20px;
`