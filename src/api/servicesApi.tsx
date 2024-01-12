import axios from 'axios';
import {BASE_URL, ASSINATURAS, COBRANCAS, CUSTOMERS} from '../api/api.d'


async function getCobrancas(id: string) {
   

    await axios.get(`${BASE_URL}${COBRANCAS}`, { params: { id: id } })
    .then(response => {
      console.log(response.data)

    })
    .catch(error => {return(error.response.data.error)});
  }
  

async function getAssinaturas(id: string) {
    

    await axios.get(`${BASE_URL}${ASSINATURAS}`, { params: { id: id } })
    .then(response => {
      console.log(response.data)

    })
    .catch(error => {return(error.response.data.error)});
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