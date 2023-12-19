import * as yup from "yup";
import { validateCPF, validateCep, validatePhone } from 'validations-br';




 export const schema = yup.object().shape({
    nome: yup.string().required('Escrever seu nome é Obrigatório!'),
    cpfOrCnpj: yup.string().required('CPF é obrigatório').test("CPF",
    "CPF inválido",
    (value) => validateCPF(value)),
    email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
    password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('A senha é obrigatória'),
    password2: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('A senha é obrigatória').oneOf([yup.ref('password'), ''], 'As senhas precisam ser iguais')
    .required('Confirme sua senha'),
    cep: yup.string().required('CEP é obrigatório').test("CEP",
    "CEP inválido",
    (value) => validateCep(value)),
    celular: yup.string().required('Celular é obrigatorio').test("CEL",
    "Celular inválido",
    (value) => validatePhone(value)),
    numero: yup.string().required(),
    complemento: yup.string(),
    bairro: yup.string().required(),
    cidade: yup.string().required(),
    uf: yup.string().required(),
    logradouro:yup.string().required()
  })