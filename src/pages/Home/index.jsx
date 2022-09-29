import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

export const Home = () => {
    const auth = useContext(AuthContext)
    return (
        <div align="center" style={{marginTop: '10px'}}>
            <h3>Esta é a página Home! {auth.user?.name && `Seja bem vindo, Sr: ${auth.user.name}`}</h3>
        </div>
    );
}

export default Home;