import React, { useState } from "react"
import Axios from 'axios'
import { useNavigate } from "react-router-dom";

function Cadastro() {
  let navigate = useNavigate();
  const [user, setUser] = useState("")
  const [senha, setSenha] = useState("")
  const [nome, setNome] = useState("")

  const url = "http://localhost:4000/api/user/register"
  
  async function saveUser(event) {
    event.preventDefault();
    const userVerify = {
      nome: nome,
      user: user,
      senha: senha
    }

    
    let requisicao = Axios.post(url, userVerify)
    requisicao.then((resposta) => {
      if(resposta.status === 201){
        alert("Cadastrado")
        navigate("/")
      }   
    })
  }

  const handleUser = event => {
    setUser(event.target.value)
  }

  const handlePassword = event => {
    setSenha(event.target.value)
  }
  
  const handleNome = event => {
    setNome(event.target.value)
  }

  return (
    <div className="container">
      <h1>Cadastrar</h1>
      <form onSubmit={saveUser}>
        <input type='text' placeholder="Nome" id="nome" onChange={handleNome} value={nome} /><br/>
        <input type='text' placeholder="Usuario" id="user" onChange={handleUser} value={user} /><br/>
        <input type='password' placeholder="Senha" id="senha" onChange={handlePassword} value={senha} /><br/>
        <input id="submit" type="submit" value="Cadastrar" />
      </form>
    </div>
  );
}

export default Cadastro;
