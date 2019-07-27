import React from 'react'
import "../styles/Badge.css"
import confLogo from '../images/badge-header.svg'
//Los componentes son clases

class Badge extends React.Component {
    render() {
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo de la conferencia" />
                </div>
                <div className="Badge__section-name">
                    <img className="Badge__avatar" src="https://firebasestorage.googleapis.com/v0/b/davidpalmalugo-6ffa4.appspot.com/o/yo3.jpg?alt=media&token=b80bc1df-ea46-4595-abfc-a692be4b2f90" alt="Logo de la conferencia" />
                    <h1>David <br /> Palma</h1>
                </div>
                <div className="Badge__section-info">
                    <h3>Fronted Engineer</h3>
                    <div>@DavidPalma</div>
                </div>
                <div className="Badge__footer">
                    <p>Platzi conf</p>
                </div>
            </div>
        )
    }
}

export default Badge;