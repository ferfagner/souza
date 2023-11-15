import axios from 'axios';

export default function Callback(){

    async function fetchData () {
        try {
          const response = await axios.get('https://www.bling.com.br/Api/v3/oauth/authorize?response_type=code&client_id=e974c2fc68a604ad298603299b776b82702f2e0a&state=ceb128688bdb1d2c229a0bc14192c95b&scopes=98308+98313+98619+101584+104163+507943+1563512+200802821+318257559+318257561+318257565', {
           
          });
  
          // Você não pode acessar diretamente o corpo da resposta em 'no-cors'
          // Pode verificar se a solicitação foi bem-sucedida sem o corpo
          if (response) {
            console.log('Solicitação bem-sucedida');
          } else {
            console.log('Erro na solicitação');
          }
        } catch (error) {
          console.log(error);
        }
      };
        
    
    return(
        <>
        <button onClick={()=>{fetchData()}}>
            Teste
        </button>
        </>
    )
}