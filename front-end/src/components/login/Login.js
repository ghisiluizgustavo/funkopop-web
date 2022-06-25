import React from 'react'
import Axios from 'axios'
import './Login.css'

class Login extends React.Component {

    constructor(){
        super()
        this.url = "http://localhost:4000/api/user/"
        this.state = {
            "user": "",
            "senha": ""
        }
    }

    handleInput = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    login = () => {
        let user = {
            user: this.state.user,
            senha: this.state.senha 
        }
        let requisicao = Axios.post(this.url + "login", user)
        requisicao.then((resposta) => {
            if(resposta.status === 200){
                alert("enviar para outra tela")
            }
            
        })
    }

    render(){
        return (
            <main className="Main">
                <h1>Login</h1>
                <form>
                    <input placeholder="Usuário" type="text" id="user" onChange={this.handleInput} value={this.state.user}></input>
                    <input placeholder="Senha" type="password" id="senha" onChange={this.handleInput} value={this.state.senha}></input>
                    <button type="button" onClick={this.login} >Login</button>
                </form>            
            </main>
        )
    }

}

export default Login