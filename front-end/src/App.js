import './App.css';
import Login from './components/login/Login.js'
import Funko from './components/funko/Funko.js'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/funko" element={<Funko />} />
      </Routes>
    </div>
  );
}

export default App;
