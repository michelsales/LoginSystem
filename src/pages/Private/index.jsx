import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

export const Private = () => {
    const auth = useContext(AuthContext);
    
    return (
        <div align="center" style={{marginTop: '10px'}}>
            <h4>Olá seja bem vindo a rota privada, {auth.user.name}!  </h4> 
        </div>
    );
};

export default Private;