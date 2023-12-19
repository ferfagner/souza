// AuthContext.tsx
import { createContext, useContext, ReactNode, useState } from 'react';
import {Autenticator} from '../db/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { getUserById } from '../db/userServices';
import {useEffect} from 'react'
import{UserDTO} from '../DTO/userDTO'

interface LogInCredential{
    email: string;
    password: string;
}


interface AuthContextType {
  isAuthenticated: boolean;
  logIn: (credential: LogInCredential) => Promise<void>
  logOut: () => void;
  user: UserDTO;
  error: string
}



const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({children}: AuthProviderProps){
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState<string>('');
  const [data, setData] = useState<UserDTO>({} as UserDTO)

  async function logIn(credential: LogInCredential) {
    
 
   await signInWithEmailAndPassword(Autenticator, credential.email, credential.password)
    .then(async({user})=>{

        const userData = await getUserById(user.uid)
        
        if (userData) {
            setData(userData)
        }
        setAuthenticated(true)

        localStorage.setItem('authState', JSON.stringify({ isAuthenticated: true, data: userData }));
          
      }).catch(error => {
        console.error(error);
        if (error.code === 'auth/invalid-login-credentials') {
          setError('E-mail ou senha incorretos!');
        } else {
          setError('Erro ao fazer login. Por favor, tente novamente mais tarde.');
        }

      })
  };

  function logOut () {
    setAuthenticated(false);
    localStorage.setItem('authState', JSON.stringify({ isAuthenticated: false, data: {} }));
    
  };

  useEffect(() => {
    // Recupera o estado de autenticação ao inicializar
    const storedAuthState = localStorage.getItem('authState');
    if (storedAuthState) {
      const parsedAuthState = JSON.parse(storedAuthState);
      setAuthenticated(parsedAuthState.isAuthenticated);
      setData(parsedAuthState.data);
    }
  }, []);

  return (
    <AuthContext.Provider value={{
        isAuthenticated,
        user: data,
        logIn,
        logOut,
        error
    }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};




export { AuthProvider, useAuth };
