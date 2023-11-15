import axios from 'axios';
import { useEffect } from 'react';
import {  useSearchParams} from 'react-router-dom';

export default function Callback(){
    let [searchParams] = useSearchParams();

    let code = searchParams.get("code")
    //let state = searchParams.get("state")

    async function fetchData () {
        const autorization = btoa(`${process.env.BLING_CLIENT_ID}:${process.env.BLING_CLIENT_SICRET}`)


        const data = new URLSearchParams();
        data.append('grant_type', 'authorization_code');
        data.append('code', `${code}`);
        
        const headers = {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': '1.0',
          'Authorization': `Basic ${autorization}`,
        };
        
       await axios.post('https://www.bling.com.br/Api/v3/oauth/token', data, { headers })
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
        }

        useEffect(()=>{
           fetchData()
        },[])
    
    return(
        <>
       <h2>a</h2>
        </>
    )

}