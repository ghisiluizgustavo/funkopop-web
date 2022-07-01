import React, { useState } from "react"
import Axios from 'axios'
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";


function FunkoCad() {
  let navigate = useNavigate();
  const [descricao, setDescricao] = useState("")
  const [valor, setValor] = useState(0)
  const [sale, setSale] = useState(true)
  const [url, setUrl] = useState("")

  const urlApi = "http://localhost:4000/api/funko/register"
  
  async function saveFunko(event) {
    event.preventDefault();
    const funkoSave = {
      descricao: descricao,
      valor: valor,
      sale: sale,
      url: url
    }

    
    let requisicao = Axios.post(urlApi, funkoSave)
    requisicao.then((resposta) => {
      if(resposta.status === 201){
        alert("Funko salvo")
        navigate("/funko")
      }   
    })
  }

  const handleDescricao = event => {
    setDescricao(event.target.value)
  }

  const handleValor = event => {
    setValor(event.target.value)
  }

  const handleSale = event => {
    setSale(event.target.value)
  }

  const handleUrl = event => {
    setUrl(event.target.value)
  }

  return (
    <div>
      <Link to={"/funko"}>Lista de funkos</Link>
      <h1>Cadastro de Funko</h1>
      <form onSubmit={saveFunko}>
        <label>Descrição: </label>
        <input type='text' id="descricao" onChange={handleDescricao} value={descricao} /><br/>
        <label>Valor: </label>
        <input type='number' id="valor" onChange={handleValor} value={valor} /><br/>
        <label>Está a venda? </label>
        <input type='boolean' id="sale" onChange={handleSale} value={sale} /><br/>
        <label>Url da imagem: </label>
        <input type='text' id="url" onChange={handleUrl} value={url} /><br/>
        <input type="submit" value="Salvar Funko" />
      </form>
    </div>
  );
}

export default FunkoCad;
