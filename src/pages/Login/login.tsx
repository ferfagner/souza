// Login.js
import React, { useEffect, useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import {Autenticator} from '../../db/firebase'
import {Body,TiTle,Header,Container} from './styledlogin'
import Menu from '../../components/menu/menu';
import { InputText } from '../../components/form/inputText/inputText';
import Button from '../../components/form/button/button';

export default function Login() {
    const [user, setUser] = useState<any>()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signInWithEmailAndPassword(Autenticator, email, password)
    .then((userCredential) => {
   
      const User = userCredential.user;
     console.log(User)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
    
      
    
  };


  return (
    <Container>
    <Header>
    <Menu/>
    </Header>
  <Body>
  <div style={{backgroundColor: '#52658'}}>
      <TiTle>Faça seu login</TiTle>
      <form onSubmit={handleLogin}>
        <label>
            
          <InputText 
          title='E-mail:' 
          placeholder='Digite seu E-mail'
          type='e-mail' 
          onChange={(e)=> setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
        <InputText 
          title='Senha:' 
          placeholder='Digite sua Senha'
          type='password' 
          onChange={(e)=> setPassword(e.target.value)}
          />
        </label>
        <br />
        <Button type='submit' >
            Logar
        </Button>
      </form>
    </div>
  </Body>
  </Container>
  
  );
};

