import styled from 'styled-components';

export const ContainerBox = styled.div`
  background-color: ${(props) => props.theme.colors.red150};;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 17rem;
  height: 7rem;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

export const InfoValue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  color: ${(props) => props.theme.colors.white};;
`;

export const PrincipalValue = styled.div`
  font-size: 3.5rem;
`;

export const InfoP = styled.p`
  text-align: center;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.white};;
`;

export const IconBox = styled.div`
  font-size: 3rem;
  color: ${(props) => props.theme.colors.white};
`;
