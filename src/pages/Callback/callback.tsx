import axios from 'axios';
import { useEffect } from 'react';
import {  useSearchParams} from 'react-router-dom';

export default function Callback(){
    let [searchParams] = useSearchParams();

    let code = searchParams.get("code")
    const tokenUrl = 'https://www.bling.com.br/Api/v3/oauth/token';

    async function fetchData () {
        const autorization = btoa(`${process.env.BLING_CLIENT_ID}:${process.env.BLING_CLIENT_SICRET}`)
      
            axios.post(tokenUrl, {
                grant_type: 'authorization_code',
                code: code,
            }, {
                headers: {
                    'Authorization': `Basic ${autorization}` ,
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': '1.0'
                }
            }).then((response)=>{
                console.log('Token de acesso:', response.data.access_token);
            })
          .catch(error => {
            console.log(error);
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