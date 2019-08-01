import React from 'react'
import {Link} from 'react-router-dom'
import Gravatar from './Gravatar'
//import './styles/Badges.css'
//import FontAwesome from 'react-fontawesome';
import "./styles/Badge.css"
import './styles/BadgesList.css'

cla BadgesListItem extends React.Component {
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-3 badge-container-avatar">
                        <Gravatar className="BadgesListItem__avatar" email={this.props.badge.email} alt="Avatar"/>
                    </div>
                    <div className="col-9 badge-container-info">
                        <h4 className="BadgeList-name">{this.props.badge.firstName}{this.props.badge.lastName}</h4>
                        <span className="BadgeList-twitter">{this.props.badge.twitter}</span><br/>
                        <span className="jobTitle">{this.props.badge.jobTitle}</span>
                    </div>
                </div>
            </div>
        )
    }
}

class BadgesList extends React.Component {
    render() {
        if (this.props.badges.lenght === 0) {
            return (
                <div>
                    <h3>No encontramos ningun badge</h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        Create new badge
                    </Link>
                </div>
            )
        }
        return (
            <ul className="list-unstyled">
                {this.props.badges.map((badge)=>{
                    return (
                        <li key={badge.id} className="BadgesListItem">
                            <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}  `}>                      
                                <BadgesListItem badge={badge} />
                            </Link>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default BadgesList