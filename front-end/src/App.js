import './App.css';
import Login from './components/login/Login.js'
import Funko from './components/funko/Funko.js'
import {Route, Routes} from 'react-router-dom'
import FunkoCad from './components/funko-cad/FunkoCad';
import Cadastro from './components/registrar/Cadastro';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/funko" element={<Funko />} />
        <Route exact path="/funko-cad" element={<FunkoCad />} />
        <Route exact path="/cadastro" element={<Cadastro />} />
      </Routes>
    </div>
  );
}

export default App;
