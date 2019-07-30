import React from 'react'
import './styles/BadgeNew.css'
import header from '../images/badge-header.svg'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

class BadgeNew extends React.Component {
    state = {
        form:{
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
        }
    }

    /*
    1era opcion o manera de levantar el estado y traer los valores 
    handleChange = e => {
        const nextForm = this.state.form
        nextForm[e.target.name] = e.target.value
        this.setState({
            form: nextForm
        })
    }
    
    */

    //2da opcion o manera de levantar el estado y traer los valores 
    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form, //destructuramos el objeto de state form para traer la infor
                [e.target.name]: e.target.value
            }
        })
    }
    render(){
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo" /> 
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName} 
                                lastName={this.state.form.lastName}
                                jobTitle={this.state.form.jobTitle} 
                                twitter={this.state.form.twitter}
                                email={this.state.form.email}
                                avatarUrl="https://firebasestorage.googleapis.com/v0/b/davidpalmalugo-6ffa4.appspot.com/o/yo3.jpg?alt=media&token=b80bc1df-ea46-4595-abfc-a692be4b2f90"                  
                                />  
                        </div>
                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>  
                        </div>
                    </div>
                </div>
            </React.Fragment>       
        )
    }
}

export default BadgeNew