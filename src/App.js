import { useContext } from 'react';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';

import Private from './pages/Private';
import Home from './pages/Home';

import { AuthRequired } from './contexts/AuthRequired';
import AuthContext from './contexts/AuthContext';


function App() {
  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    console.log('chamou legal');
    await auth.signOut();

    window.location.reload(false);
  }

  return (
    <div className="App">
      <header>
        <h1>Sistema de Login </h1>
        <div>
          <Link to="/">Home</Link>      
          <Link to="/private">Private</Link>
          {auth.user && <button onClick={handleLogout}>Sair</button>}
        </div>
      </header>
        <Routes>
          <Route path="/" element={<Home />} />      
          <Route path="/private" element={<AuthRequired><Private /></AuthRequired>} />          
        </Routes>
    </div>
  );
}

export default App;
