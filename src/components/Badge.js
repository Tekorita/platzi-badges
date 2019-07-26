import React from 'react'
import confLogo from '../images/badge-header.svg'
//Los componentes son clases

class Badge extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img src={confLogo} alt="Logo de la conferencia" />
                </div>

                <div>
                    <img src={confLogo} alt="Logo de la conferencia" />
                    <h1>David <br /> Palma</h1>
                </div>

                <div>
                    <p>Fronted Engineer</p>
                    <p>@DavidPalma</p>
                </div>

            </div>
        )
    }
}

export default Badge;