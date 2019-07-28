import React from 'react'
import './styles/BadgeNew.css'
import header from '../images/badge-header.svg'
import Navbar from '../components/Navbar'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

class BadgeNew extends React.Component {
    render(){
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo" /> 
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName="David" 
                                lastName="Palma" 
                                avatarUrl="https://firebasestorage.googleapis.com/v0/b/davidpalmalugo-6ffa4.appspot.com/o/yo3.jpg?alt=media&token=b80bc1df-ea46-4595-abfc-a692be4b2f90"
                                jobTitle="Fronted Engineer" 
                                twitter="@Davidpalmalugo"                  
                                />  
                        </div>
                        <div className="col-6">
                            <BadgeForm />  
                        </div>
                    </div>
                </div>
            </div>       
        )
    }
}

export default BadgeNew