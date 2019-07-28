import React from 'react'

class BadgeForm extends React.Component {
    //state = {}; //Inicializamos el this.state como vacio para que el state de cada input no de error de inicializacion

    /*
        ahora si quiero inicializar algun input con un valor predeterminado hacemos lo siguiente:
        state = {
            jobTitle = ''Designer
        }
        de esta manera pasamos los inputs de no controlado a controlado
    */

//    handleChange = e => {//el parametro e es de evento y es lo que recibimos en el objeto en este caso el input text
        /*console.log({
            name: e.target.name,
            value: e.target.value
        })//metodo para extraer lo q se esta escribiendo*/
//        this.setState({
//            [e.target.name]: e.target.value,
//        })
//    }

    handleClick = e => {
        console.log("was click in this module")//metodo para extraer lo q se esta escribiendo
    }
    handleSubmit = e => {
        e.preventDefault() //Aqui detenemos el evento del boton para que no envie datos
        console.log("Form was submited")//metodo para extraer lo q se esta escribiendo
        console.log(this.state)//Aqui imprimos todo el estado de los inputs del formulario
    }
    render() {
        return (
            <div>
                <h1>New attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input 
                            onChange = {this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="firstName"
                            value={this.props.formValues.firstName} />                    
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input 
                            onChange = {this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="lastName"
                            value={this.props.formValues.lastName} />                    
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            onChange = {this.props.onChange} 
                            className="form-control" 
                            type="email" 
                            name="email"
                            value={this.props.formValues.email} />                    
                    </div>
                    <div className="form-group">
                        <label>Joj tittle</label>
                        <input 
                            onChange = {this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="jobTitle"
                            value={this.props.formValues.jobTitle} />                    
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input 
                            onChange = {this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="twitter"
                            value={this.props.formValues.twitter} />                    
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm

/*
    luego de manejar el estado de los inputs tenemos que levantar ese estado
    
    El estado lo tiene que manejar en este caso la pagina global que contiene al componente badge y badgeform la cual es BadgeNew
    y ahi vamos a inicializar el state de form

    y vamos a crear un metodo en la clase llamado handle change para manejar el estado de los valores de los inputs que obtenemos desde este 
    componente que es badgeform

    lo cual nos lleva a que en este componente ya no vamos a usar el handleChange por eso es q se deja comentado

    Y en el onchange de cada input de este componente sustituimos el this.handleChange por this.props.onChange xq es el va y viene de BadgeNew
*/