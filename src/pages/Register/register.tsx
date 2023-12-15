// Login.js
import {  useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Autenticator, Firestore } from '../../db/firebase';
import { Body, ErrorMensage, TiTle, Header, Container } from './styledregister';
import Menu from '../../components/menu/menu';
import { InputText } from '../../components/form/inputText/inputText';
import Button from '../../components/button/button';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from "firebase/firestore";
import { schema } from './schemas'
import { useFormik } from 'formik';
import axios from 'axios';
import PopUp from '../../components/popUp/popUp';

export default function Register() {
  const navigate = useNavigate();
  const [errolog, setErroLog] = useState('')
  const [loading, setLoading] = useState(false)

  const [isPopupOpen, setPopupOpen] = useState(false);

  
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

      setLoading(true)

      let idAsaas = ''

     await axios.post('http://localhost:3001/clientes',{
        nome: values.nome,
        email: values.email,
        cpf: values.cpfOrCnpj,
      })
      .then(response => {
        console.log(response.data.cliente)
        idAsaas = response.data.cliente

      })
      .catch(error => setErroLog(error.response.data.error));


       if(idAsaas.length != 0){

      createUserWithEmailAndPassword(Autenticator, values.email, values.password)
        .then(async ({ user }) => {



          await addDoc(collection(Firestore, 'users'), {
            id: user.uid,
            idAsaas: idAsaas,
            nome: values.nome,
            email: values.email,
            cpf: values.cpfOrCnpj,
          });
          setPopupOpen(true)
          
        }).catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            setErroLog('esse e-mail já foi cadastrado!')
          }

        })

    }},
  });

  function closePopup( ){
    navigate('/login');
  }

 

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

            <Button type='submit' disabled={loading} isLoading={loading}>Registrar</Button>
          </form>

        </div>
        <PopUp texto='Parabéns você foi cadastrado com sucesso!' isOpen={isPopupOpen} onClick={closePopup} />
      </Body>
    </Container>
  );
}
