import React from 'react'

class BadgeForm extends React.Component {
    state = {}; //Inicializamos el this.state como vacio para que el state de cada input no de error de inicializacion

    /*
        ahora si quiero inicializar algun input con un valor predeterminado hacemos lo siguiente:
        state = {
            jobTitle = ''Designer
        }
        de esta manera pasamos los inputs de no controlado a controlado
    */

    handleChange = e => {//el parametro e es de evento y es lo que recibimos en el objeto en este caso el input text
        /*console.log({
            name: e.target.name,
            value: e.target.value
        })//metodo para extraer lo q se esta escribiendo*/
        this.setState({
            [e.target.name]: e.target.value,

        })
    }
    handleClick = e => {
        console.log("was click in this module")//metodo para extraer lo q se esta escribiendo
    }
    handleSubmit = e => {
        e.preventDefault() //Aqui detenemos el evento del boton para que no envie datos
        console.log("Form was submited, message confirmed")//metodo para extraer lo q se esta escribiendo
    }
    render() {
        return (
            <div>
                <h1>New attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input 
                            onChange = {this.handleChange} 
                            className="form-control" 
                            type="text" 
                            name="firstName"
                            value={this.state.firstName} />                    
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input 
                            onChange = {this.handleChange} 
                            className="form-control" 
                            type="text" 
                            name="lastName"
                            value={this.state.lastName} />                    
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            onChange = {this.handleChange} 
                            className="form-control" 
                            type="email" 
                            name="email"
                            value={this.state.email} />                    
                    </div>
                    <div className="form-group">
                        <label>Joj tittle</label>
                        <input 
                            onChange = {this.handleChange} 
                            className="form-control" 
                            type="text" 
                            name="jobTitle"
                            value={this.state.jobTitle} />                    
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input 
                            onChange = {this.handleChange} 
                            className="form-control" 
                            type="text" 
                            name="twitter"
                            value={this.state.twitter} />                    
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm