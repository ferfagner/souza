// Login.js
import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Autenticator, Firestore } from '../../db/firebase';
import { LogradouroDTO } from '../../DTO/logradouroDTO'
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
  const [logradouro, setLogradouro] = useState<LogradouroDTO>()
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [disabled, setDisabled] = useState(true)

  async function handleCEP(cep: string) {
    await axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {

      setLogradouro(response.data)


    })
    setDisabled(false)
  }

  const formik = useFormik({
    initialValues: {
      nome: '',
      cpfOrCnpj: '',
      email: '',
      password: '',
      password2: '',
      cep: '',
      logradouro: '',
      complemento: '',
      bairro: '',
      cidade: '',
      numero: '',
      celular: '',
      uf: ''
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      console.log('clicou')
      setLoading(true)

      let idAsaas = ''

      await axios.post('http://localhost:3001/clientes', {
        nome: values.nome,
        email: values.email,
        cpf: values.cpfOrCnpj,
        cep: values.cep,
        celular: values.celular,
        numero: values.numero
      })
        .then(response => {
          console.log(response.data.cliente)
          idAsaas = response.data.cliente

        })
        .catch(error => setErroLog(error.response.data.error));


      if (idAsaas.length != 0) {

        createUserWithEmailAndPassword(Autenticator, values.email, values.password)
          .then(async ({ user }) => {



            await addDoc(collection(Firestore, 'users'), {
              id: user.uid,
              idAsaas: idAsaas,
              nome: values.nome,
              email: values.email,
              cpf: values.cpfOrCnpj,
              cep: values.cep,
              logradouro: values.logradouro,
              complemento: values.complemento,
              bairro: values.bairro,
              cidade: values.cidade,
              uf: values.uf,
              numero: values.numero,
              celular: values.celular
            });
            setPopupOpen(true)

          }).catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              setErroLog('esse e-mail já foi cadastrado!')
            }

          })

      }
    },
  });

  function closePopup() {
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
                title='Nome Completo:'
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
            <label>
              <InputText
                title='Celular:'
                placeholder='Digite seu celular!'
                type='text'
                name='celular'
                onChange={formik.handleChange}
                value={formik.values.celular}
                error={formik.errors.celular}
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
            <label>
              <InputText
                title='CEP:'
                placeholder='Digite seu CEP:'
                type='text'
                onChange={formik.handleChange}
                onBlur={(e) => {
                  handleCEP(e.target.value);
                  formik.handleBlur(e);
                  setDisabled(false);  // Desabilita o campo CEP após o preenchimento
                }}
                name='cep'
                value={formik.values.cep}
                error={formik.errors.cep}
              />
            </label>
                <label>
                  <InputText
                    title='Endereço:'
                    placeholder='Digite seu Endereço:'
                    type='text'
                    onChange={formik.handleChange}
                    name='logradouro'
                    value={formik.values.logradouro || logradouro?.logradouro || ''}
                  />
                </label>
                <label>
                  <InputText
                    title='Complemento:'
                    placeholder='Digite o Complemento:'
                    type='text'
                    onChange={formik.handleChange}
                    name='complemento'
                    value={formik.values.complemento || logradouro?.complemento || ''}
                  />
                </label>
                <label>
                  <InputText
                    title='Bairro:'
                    placeholder='Digite seu Bairro:'
                    type='text'
                    onChange={formik.handleChange}
                    name='bairro'
                    value={formik.values.bairro || logradouro?.bairro || ''}
                  />
                </label>
                <label>
                  <InputText
                    title='Cidade:'
                    placeholder='Digite sua Cidade:'
                    type='text'
                    onChange={formik.handleChange}
                    name='cidade'
                    value={formik.values.cidade || logradouro?.localidade || ''}
                  />
                </label>
                <label>
                  <InputText
                    title='Estado:'
                    placeholder='Digite seu Estado:'
                    type='text'
                    onChange={formik.handleChange}
                    name='uf'
                    value={formik.values.uf || logradouro?.uf || ''}
                  />
                </label>
                <label>
                  <InputText
                    title='Numero:'
                    placeholder='Digite o Numero da sua casa:'
                    type='text'
                    onChange={formik.handleChange}
                    name='numero'
                    value={formik.values.numero}
                  />
                </label>

            

            <br />
            <ErrorMensage>{errolog && <div style={{ color: 'red' }}>{errolog}</div>}</ErrorMensage>
          <Button type='submit' disabled={disabled} isLoading={loading}>Registrar</Button>
          </form>

        </div>
        <PopUp texto='Parabéns você foi cadastrado com sucesso!' isOpen={isPopupOpen} onClick={closePopup} />
      </Body>
    </Container>
  );
}
