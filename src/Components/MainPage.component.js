import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import logo from '../images/covid.svg' ;
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import IndiaComponent from './India.component.js';
import WorldComponent from './World.component.js';
import DashboardComponent from './dashboard.component.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function MainPageComponent(){

       
        return(
            <div>
                <Router>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
                    <img src={logo} style={{height:"50px" , width:"50px"}}></img>
                    <h4 style={{color:"white", marginTop:"12px"}}>COVID-19</h4>
                    
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link style={{color:"#33DDFF"}} to={'/'} >
                                <FontAwesomeIcon icon={faHome} />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{color:"#FF9933"}} to={'/india'} >
                                <FontAwesomeIcon icon={faFlag} />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{color:"#F3F31A"}} to={'/world'}  >
                                <FontAwesomeIcon icon={faGlobe} />
                                </Link>
                            </li>
                        </ul>
                </nav>
                        
               
                    <Switch>
                        <Route exact path='/' component={DashboardComponent} /> 
                        {/* <Route exact path='/dashboard' component={DashboardComponent} /> */}
                        <Route  path='/world' component={WorldComponent} />
                        <Route  path='/india' component={IndiaComponent} />
                        <Redirect from="*" to="/" /> 
                    </Switch>
                </Router>
               
            </div>
            )
        

            
}



export default MainPageComponent;
