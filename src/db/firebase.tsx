// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'



const app = initializeApp(firebaseConfig);

const Autenticator = getAuth(app)

export {Autenticator}