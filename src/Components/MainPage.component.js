import React, { useState,useEffect } from 'react';
import CustomizedTables from '../MUComponents/TableScroll.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import logo from '../images/covid.svg' ;

function MainPageComponent(){

    const [error,setError] = useState(null);
    const [isLoaded,setIsLoaded] = useState(false);
    const [items,setItems] = useState([]);

    useEffect(() => {
        fetch("https://pomber.github.io/covid19/timeseries.json")
        .then( res => res.json())
        .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
              
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
        

    }, [])

    
    var Country =[];
    for(var x in items)
    {
            var arr = [];
            arr.push(x);
            arr.push(items[x][items[x].length-1].confirmed);
            var newCases = (items[x][items[x].length-1].confirmed)-(items[x][items[x].length-2].confirmed);
            arr.push(newCases);
            arr.push(items[x][items[x].length-1].recovered);
            Country.push(arr);
    }
       
        console.log(items);
        return(
            <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
            <img src={logo} style={{height:"40px" , width:"40px"}}></img>
            <h5 style={{color:"white", alignSelf:"flex-end"}}>COVID-19</h5>
                    <ul className="navbar-nav">
                        <li className="nav-item" >
                        <a className="nav-link" style={{marginLeft:"100px",color:"#FF9933"}} href="#">INDIA</a>
                        </li>
                        <li className="nav-item" >
                        <a className="nav-link"style={{marginLeft:"100px",color:"#F3F31A"}} href="#">WORLD</a>
                        </li>
                    </ul>
                </nav>
           <div className="container">
                <h2>Reports of COVID-19</h2>
                
                
                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th>Country</th>
                        <th style={{color:"#E50000"}}>Total Cases</th>
                        <th>Cases in Last 24 Hours</th>
                        <th style={{color:"limegreen"}}>Recovered</th>
                    </tr>
                    </thead>
                    <tbody>
                        {Country.map(item => (
                        <tr>
                            <td>
                                {item[0]}
                            </td>
                            <td>
                                {item[1]}
                            </td>
                            <td>
                                {item[2]}
                            </td>
                            <td>
                                {item[3]}
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>
            )
        
}

export default MainPageComponent;
