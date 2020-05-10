import React, { useState,useEffect } from 'react';
import CustomizedTables from '../MUComponents/TableScroll.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
 
 function IndiaComponent(){

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

    
    
    var India=[];
    if(items.length!=0)
    {
       India= items.data["regional"];
    }
    console.log(India);
   
        return(
            <div className="container">
                <h3 style={{color:"#FF9933",marginTop:"20px"}}>Reports of Coronavirus Cases in INDIA</h3>
                
                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th style={{color:"#33DDFF"}}>State</th>
                        <th style={{color:"#E50000"}}>Total Cases</th>
                        <th style={{color:"limegreen"}}>Recovered</th>
                    </tr>
                    </thead>
                    <tbody>
                        {India.map(item => (
                        <tr>
                            <td>
                                {item.loc}
                            </td>
                            <td>
                                {item.confirmedCasesIndian}
                            </td>
                            <td>
                                {item.discharged}
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            )
        
}

export default IndiaComponent;