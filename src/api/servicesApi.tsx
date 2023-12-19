import axios from 'axios';
import {BASE_URL, ASSINATURAS, COBRANCAS, CUSTOMERS} from '../api/api.d'


async function getCobrancas(id: string) {
    try {
      const response = await axios.get(`${BASE_URL}${COBRANCAS}`, { params: { id: id } });
      
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar cobranças:", error);
      throw error; // Lança a exceção novamente para ser tratada fora da função
    }
  }
  

async function getAssinaturas(id: string) {
    try {
      const response = await axios.get(`${BASE_URL}${ASSINATURAS}`, { params: { id: id } });
      
      return response.data; // Retorna os dados obtidos
    } catch (error) {
      console.error("Erro ao buscar assinaturas:", error);
      throw error;
    }
  }

async function getCliente(cpf: string){

    await axios.get(`${BASE_URL}${CUSTOMERS}`, {
        params:{
            cpf : cpf
        }
    })
      .then(response => {
        console.log(response.data)

      })
      .catch(error => {return(error.response.data.error)});

}



export {getCobrancas, getAssinaturas, getCliente}