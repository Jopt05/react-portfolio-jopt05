import axios from "axios";
import { createContext, useEffect, useState } from "react";

 interface AuthState {
    isLoggedIn: boolean;
    token?: string;
}

const authInitialState: AuthState = {
    isLoggedIn: false,
}

interface AuthContextProps {
    authState: AuthState;
    signIn: (token: string) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

const baseUrl = import.meta.env.VITE_API_URL;

export const AuthProvider = ({ children }: any) => {
    
    if( !baseUrl ) return;

    const [authState, setAuthState] = useState<AuthState>({
        isLoggedIn: false
    })

    const signIn = (token: string) => {
        setAuthState({
            isLoggedIn: true,
            token: token
        })
    }

    useEffect(() => {
      const token = localStorage.getItem('token');
      if( !token ) return;
      axios.post(
        `${baseUrl}/api/usuarios/Auth`,
        JSON.stringify({
            token
        }), {
            headers: {
                "Content-Type": "application/json"
            }
        }
      )
        .then((response) => {
            if( response.status == 200 ) {
                setAuthState({
                    isLoggedIn: true,
                    token: token
                })
            }
        })
        .catch((err) => {
            setAuthState({
                isLoggedIn: false
            })
        })
    }, [])
    

    return (
        <AuthContext.Provider
            value={{
                authState: authState,
                signIn: signIn
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}