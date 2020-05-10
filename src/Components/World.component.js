import React, { useState,useEffect } from 'react';
import CustomizedTables from '../MUComponents/TableScroll.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
 
 function WorldComponent(){   
    
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
            <div className="container">
                <h3 style={{color:"#EBE80F",marginTop:"20px"}}>Reports of Coronavirus Cases in WORLD</h3>
                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th style={{color:"#33DDFF"}}>Country</th>
                        <th style={{color:"#E50000"}}>Total Cases</th>
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
                                <div style={{color:"#E50000",fontSize:"12px"}}>+{item[2]}</div>
                            </td>
                           <td>
                                {item[3]}
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            )
        
}

export default WorldComponent;