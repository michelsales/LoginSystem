import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import './styles.css';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword ] = useState('')
    const navigate = useNavigate();

    const auth = useContext(AuthContext);

    const handleLogin = async () => {
        if (!email || !password) {
            alert('preencha todos os campos !');
        } else {
            const isLogged = await auth.signIn(email, password);
            if (isLogged) {
                navigate('/private');
            } 
        }
    }


    return(
        <div className="LoginContainer">
            <h4>Faça seu login: </h4>
            <input 
                type="text" 
                value={email} 
                placeholder="Insira um email:"
                onChange={(e) => { setEmail(e.target.value) }}
            />
            <br />
            <input 
                type="password" 
                value={password} 
                placeholder="Insira uma senha:"
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button onClick={handleLogin}>LOGIN</button>
        </div>
    );
}
export default Login;