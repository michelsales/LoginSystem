import { useContext } from "react"
import Login from "../pages/Login";
import { AuthContext } from './AuthContext'

export const AuthRequired = ({children}) => { 
    const auth = useContext(AuthContext);

    if(!auth.user){
       return <Login />
    }

    return children;
}