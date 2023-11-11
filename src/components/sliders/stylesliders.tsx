import styled from 'styled-components';

export const ImgSlide= styled.img`
width: 100vw;
height: 90vh;
object-fit: cover;

`


export const Title= styled.h2`
    font-size: 3rem;
 font-weight: 700;
 margin-bottom: 2rem;
 color: ${(props) => props.theme.colors.black100};

`

export const SubTitle= styled.h5`
font-size: 1.5rem;
 margin-bottom: 2rem;
 color: ${(props) => props.theme.colors.black50};

`

export const Button= styled.button`
text-decoration: none;
background-color: ${(props) => props.theme.colors.red100};
color: ${(props) => props.theme.colors.white};
height: 3rem;
border-radius: 5px;

&:hover {
    border-bottom: 2px solid white;
    background-color: ${(props) => props.theme.colors.red200};
    cursor:pointer ;
  }

`

