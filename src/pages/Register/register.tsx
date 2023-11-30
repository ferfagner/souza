// Login.js
import {  useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {Autenticator, Firestore} from '../../db/firebase';
import {Body,ErrorMensage,TiTle,Header,Container} from './styledregister';
import Menu from '../../components/menu/menu';
import { InputText } from '../../components/form/inputText/inputText';
import Button from '../../components/button/button';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection} from "firebase/firestore"; 
import {schema} from './schemas'
import { useFormik } from 'formik';
import axios from 'axios';
import {BASE_URL_ASAS, CUSTOMERS} from '../../api/api.d'

export default function Register() {
    const navigate = useNavigate();
    const [errolog, setErroLog]= useState('')
  
    const formik = useFormik({
      initialValues: {
        nome: '',
        cpfOrCnpj: '',
        email: '',
        password: '',
        password2: '',
      },
      validationSchema: schema,
      onSubmit: async (values) => {

        axios.post(`${BASE_URL_ASAS}${CUSTOMERS}`, {
          "name": values.nome,
          "cpfCnpj": values.cpfOrCnpj,
          "mobilePhone": "4799376637"
        },{
          headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
            'access_token': process.env.API_ASAAS 
          },
        },).then(response => {
          console.log(response)
        })
        .catch(error => {
          // lide com o erro
        });

      

      },
    });
  
    return (
      <Container>
        <Header>
          <Menu />
        </Header>
        <Body>
          <div style={{ backgroundColor: '#52658' }}>
            <TiTle>Registre-se Agora</TiTle>
            <form onSubmit={formik.handleSubmit}>
            <label>
                <InputText
                  title='Nome:'
                  placeholder='Digite seu nome completo!'
                  type='text'
                  name='nome'
                  onChange={formik.handleChange}
                  value={formik.values.nome}
                  error={formik.errors.nome}
                />
              </label>
              <label>
                <InputText
                  title='CPF/CNPJ:'
                  placeholder='Digite seu CPF ou CNPJ!'
                  type='text'
                  name='cpfOrCnpj'
                  onChange={formik.handleChange}
                  value={formik.values.cpfOrCnpj}
                  error={formik.errors.cpfOrCnpj}
                />
              </label>
              <label>
                <InputText
                  title='E-mail:'
                  placeholder='Digite seu E-mail!'
                  type='e-mail'
                  name='email'
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  error={formik.errors.email}
                />
              </label>
              <br />
              <label>
                <InputText
                  title='Senha:'
                  placeholder='Digite sua Senha!'
                  type='password'
                  onChange={formik.handleChange}
                  name='password'
                  value={formik.values.password}
                  error={formik.errors.password}
                />
              </label>
              <label>
                <InputText
                  title='Repita sua Senha:'
                  placeholder='Digite sua Senha Novamente!'
                  type='password'
                  onChange={formik.handleChange}
                  name='password2'
                  value={formik.values.password2}
                  error={formik.errors.password2}
                />
              </label>
              <br />
              <ErrorMensage>{errolog && <div style={{ color: 'red' }}>{errolog}</div>}</ErrorMensage>
              
              <Button type='submit'>Registrar</Button>
            </form>
            
          </div>
        </Body>
      </Container>
    );
  }
  