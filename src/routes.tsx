
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from "./pages/Home/home";
import Login from "./pages/Login/login";



export default function Rotas() {

   return(
    <BrowserRouter>
    <Routes>
           <Route path="/" element={<Home/>}  />
           <Route path="/login" element={<Login/>}  />
          
           </Routes>

    </BrowserRouter>
   )
}