import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import './Funko.css'

function Funko() {

    const url = "http://localhost:4000/api/funko/"
    let [ funkos, setFunkos ] = useState([{}]) 

    useEffect(() => {
        findAllFunkos()
    })

    function findAllFunkos(){
        let requisicao = Axios.get(url);
        requisicao.then((resposta) => {
            setFunkos(resposta.data)
            console.log(funkos)
        })
    }

    return (
        <div>
            <h3>RESULTADOS</h3>
            <Link to="/funko-cad">Cadastrar funko</Link>
            <div className='container-funko'>
                {funkos.map(funko => (
                    <div className='funko'>
                        <img src={funko.url}></img>
                        <p><b>{funko.descricao}</b></p>
                        <p><small>R${funko.valor}</small></p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Funko