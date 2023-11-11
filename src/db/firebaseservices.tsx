import { signInWithEmailAndPassword } from "firebase/auth";
import {Autenticator} from './firebase'
import {useState} from 'react'

interface User{
    email:string;
    password:string;
}

export function Autheticator({email,password}:User){

    const [user, setUser] = useState<any>()



   signInWithEmailAndPassword(Autenticator, email, password)
      .then((userCredential) => {
     
        const user = userCredential.user;
       setUser(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

      return(user)

}

export default Autheticator

