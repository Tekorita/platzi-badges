import React from 'react'
//import './styles/Badges.css'
//import FontAwesome from 'react-fontawesome';
import "./styles/Badge.css"
import './styles/BadgesList.css'

class BadgesList extends React.Component {
    render() {
        return (
            <ul className="list-unstyled">
                {this.props.badges.map((badge)=>{
                    return (
                        <li key={badge.id}>                       
                            <div className="container">
                                <div className="row">
                                    <div className="col-3 badge-container-avatar">
                                        <img className="Badge__avatar" src={badge.avatarUrl} alt="avatar"/>
                                    </div>
                                    <div className="col-9 badge-container-info">
                                        <h4 className="BadgeList-name">{badge.firstName}{badge.lastName}</h4>
                                        <span className="BadgeList-twitter">{badge.twitter}</span><br/>
                                        <span className="jobTitle">{badge.jobTitle}</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default BadgesList