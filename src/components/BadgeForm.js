import React from 'react'

class BadgeForm extends React.Component {
    handleChange = e => {//el parametro e es de evento y es lo que recibimos en el objeto en este caso el input text
        console.log({
            name: e.target.name,
            value: e.target.value
        })//metodo para extraer lo q se esta escribiendo
    }
    handleClick = e => {
        console.log("was click")//metodo para extraer lo q se esta escribiendo
    }
    handleSubmit = e => {
        e.preventDefault() //Aqui detenemos el evento del boton para que no envie datos
        console.log("Form was submited")//metodo para extraer lo q se esta escribiendo
    }
    render() {
        return (
            <div>
                <h1>New attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange = {this.handleChange} className="form-control" type="text" name="firstName" />                    
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm