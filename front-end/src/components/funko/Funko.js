import React from 'react'

class Funko extends React.Component {

    constructor(){
        super()
        this.url = "http://localhost:4000/api/user/"
    }

    handleInput = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    render(){
        return (
            <h1>FUNKOOOO</h1>
        )
    }

}

export default Funko