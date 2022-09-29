import { useCallback, useEffect, useState } from "react";
import  { UseApi } from "../hooks/useApi";
import AuthContext from "./AuthContext";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const api = UseApi();
    
    
    useEffect(() => {
        const validaToken = async () => {
            const storageData = localStorage.getItem('authToken');
            if(storageData) {
                const data = await api.validateToken(storageData);
                if (data.user) {
                    console.log(data.user)
                    setUser(data.user);
                }
            }
        };
    }, [api])
  
     

    const signIn = async (email, password) => {
        const data = await api.signIn(email, password)

        if(data.user && data.token){
            setUser(data.user)
            setToken(data.token)
            return true;
        }
        return false;
    }
    
    
    const signOut = async ( ) => { 
        setUser(null);
        setToken('');
        await api.signOut();
    }
    
    const setToken = (token) => {
        localStorage.setItem('authToken', token);
    }

    return (
        <AuthContext.Provider value={{ user, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )    
}