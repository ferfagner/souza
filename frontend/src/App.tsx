
import Rotas from "./routes";
import React from 'react' 
import ThemeProvider from './theme/themeprovider'


export default function App() {
   return (
    <React.StrictMode>
    <ThemeProvider>
       <Rotas/>
       </ThemeProvider>
       </React.StrictMode>
   );
}