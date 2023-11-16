import * as yup from "yup";

const isCPF = (value: string) => {
  const cpfRegex = /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/;
  return cpfRegex.test(value);
};


export  const schema = yup.object().shape({
    nome: yup.string().required('Escrever seu nome é Obrigatório!'),
    cpfOrCnpj: yup.string().required('CNPJ é obrigatório').test('cnpj ou cnpj', 'CNPJ/CPF inválido', isCPF),
    email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
    password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('A senha é obrigatória'),
    password2: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('A senha é obrigatória').oneOf([yup.ref('password'), ''], 'As senhas precisam ser iguais')
    .required('Confirme sua senha')
  });