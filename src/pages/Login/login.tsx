// Login.js
import {  useState } from 'react';
import {Body,ErrorMensage,Bottom,TiTle,Header,Container} from './styledlogin';
import Menu from '../../components/menu/menu';
import { InputText } from '../../components/form/inputText/inputText';
import Button from '../../components/button/button';
import {schema} from './schemas'
import { useFormik } from 'formik';
import {useAuth} from '../../hooks/auth'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate()

  const {logIn, error} = useAuth()
    
    const [errolog, setErroLog]= useState('')
  
    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: schema,
      onSubmit: async (values) => {
        try{
          await logIn({email: values.email, password: values.password})
          navigate('/dashboard')
        }catch{
          setErroLog(error)
        }
     

      },
    });
  
    return (
      <Container>
        <Header>
          <Menu />
        </Header>
        <Body>
          <div style={{ backgroundColor: '#52658' }}>
            <TiTle>Faça seu login</TiTle>
            <form onSubmit={formik.handleSubmit}>
              <label>
                <InputText
                  title='E-mail:'
                  placeholder='Digite seu E-mail'
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
                  placeholder='Digite sua Senha'
                  type='password'
                  onChange={formik.handleChange}
                  name='password'
                  value={formik.values.password}
                  error={formik.errors.password}
                />
              </label>
              <br />
              <ErrorMensage>{errolog && <div style={{ color: 'red' }}>{errolog}</div>}</ErrorMensage>
              
              <Button type='submit'>Logar</Button>
            </form>
            <Bottom>
              <p>Não tem login? </p>
              <p>Crie sua conta agora <a href='/register'>Clicando Aqui!</a></p>
            </Bottom>
          </div>
        </Body>
      </Container>
    );
  }
  