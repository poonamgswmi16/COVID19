import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import showImage from '../images/fight.png' ;
import goal from '../images/goals.png' ;
import mask from '../images/mask.png';
import cover from '../images/cover.png';
import avoid from '../images/avoid.png';
import crowd from '../images/crowd.jpg';
import wash from '../images/wash.png';

 function DashboardComponent(){
    const [error,setError] = useState(null);
    const [isLoaded,setIsLoaded] = useState(false);
    const [items,setItems] = useState([]);

    useEffect(() => {
        fetch("https://api.rootnet.in/covid19-in/stats/latest")
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

    var totalcases;
    var totalrecovered;
    var totaldeaths;
    if(items.length!=0)
    {
        totalcases= items.data["summary"].total;
        totalrecovered= items.data["summary"].discharged;
        totaldeaths= items.data["summary"].deaths;
        console.log(items.data["summary"]);
    }

return(
    <div className="container">

        {/* carousel hit */}
        <div style={{marginTop:"30px",marginBottom:"30px",textAlign:"-webkit-center"}} >
            <div id="demo" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                    <li data-target="#demo" data-slide-to="3"></li>
                    <li data-target="#demo" data-slide-to="4"></li>
                    <li data-target="#demo" data-slide-to="5"></li>
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={mask} style={{width:"70%",height:"160px"}} ></img>
                    </div>
                    <div className="carousel-item">
                    <img src={cover} style={{width:"70%",height:"160px"}} ></img>
                    </div>
                    <div className="carousel-item">
                    <img src={goal} style={{width:"70%",height:"160px"}} ></img>
                    </div>
                    <div className="carousel-item">
                    <img src={avoid} style={{width:"70%",height:"160px"}} ></img>
                    </div>
                    <div className="carousel-item">
                    <img src={crowd} style={{width:"70%",height:"160px"}} ></img>
                    </div>
                    <div className="carousel-item">
                    <img src={wash} style={{width:"70%",height:"160px"}} ></img>
                    </div>
               </div>
            </div>
        </div>
 
        <div className="card bg-info text-white">
            <div className="card-body">CASES IN INDIA UNTIL NOW</div>
        </div>
        <div className="card bg-light text-dark">
            <div className="card-body">
                <h4 style={{color:"#33DDFF"}}>Total Cases - {totalcases}</h4>
            </div>
        </div>
        <div className="card bg-light text-dark">
            <div className="card-body">
                <h4 style={{color:"limegreen"}}>Total Recovered - {totalrecovered}</h4>
            </div>
        </div>
        <div className="card bg-light text-dark">
            <div className="card-body">
                <h4 style={{color:"#E50000"}} >Total Deaths - {totaldeaths}</h4>
            </div>
        </div>

        <img src={showImage} style={{width:"70%",height:"100px",marginLeft: "auto",marginRight: "auto",display: "block",
        marginTop: "50px",marginBottom: "50px"}}>
        </img>


    </div>
)
 }
 export default DashboardComponent;