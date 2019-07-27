/*
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import App from './components/App';

const container = document.getElementById('app');

ReactDOM.render(<App />, container);

*/

import React from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.css"
import "./global.css"

//import Badge from './components/Badge'
import BadgeNew from './pages/BadgeNew'

const container = document.getElementById('app')

/*
ReactDOM.render(<Badge 
                    firstName="David" 
                    lastName="Palma" 
                    avatarUrl="https://firebasestorage.googleapis.com/v0/b/davidpalmalugo-6ffa4.appspot.com/o/yo3.jpg?alt=media&token=b80bc1df-ea46-4595-abfc-a692be4b2f90"
                    jobTitle="Fronted Engineer" 
                    twitter="@Davidpalmalugo"                  
                    />, 
                container)
*/

ReactDOM.render(<BadgeNew />, container)