import React, { useState } from "react"
import Axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import './Login.css'

function Login() {
  let navigate = useNavigate();
  const [user, setUser] = useState("")
  const [senha, setSenha] = useState("")

  const url = "http://localhost:4000/api/user/"
  
  async function validarUser(event) {
    event.preventDefault();
    const userVerify = {
      user: user,
      senha: senha
    }

    
    let requisicao = Axios.post(url + "login", userVerify)
    requisicao.then((resposta) => {
      if(resposta.status === 200){
        navigate("/funko")
      }   
    })
  }

  const handleUser = event => {
    setUser(event.target.value)
  }

  const handlePassword = event => {
    setSenha(event.target.value)
  }

  return (
    <div>
      <h1>Login</h1>
        <form onSubmit={validarUser}>
            <input type='text' id="user" onChange={handleUser} value={user} /><br/>
            <input type='password' id="senha" onChange={handlePassword} value={senha} /><br/>
            <input type="submit" value="Entrar" />
        </form>
      <Link to={"/cadastro"}>Deseja se cadastrar?</Link>
    </div>
  );
}

export default Login;
