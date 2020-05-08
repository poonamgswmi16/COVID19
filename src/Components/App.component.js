import React from 'react';
import Navbar from '../MUComponents/Navbar';

class App extends React.Component{
    
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { value : ''}
    }


    handleSubmit(event) {
        alert('HEY ITS DONE', this.value);
        
        event.preventDefault();
    }
    
    handleChange(event){
        this.setState({value:event.target.value});
    }

    render(){
        return(
            <div>
                < Navbar title = 'Phulki.com' />
                <form onSubmit = {this.handleSubmit}>
                    <fieldset>
                        <legend>PERSONAL DETAILS</legend>
                         <label>EMPLOYEE NAME </label>
                         <input type = 'text'  placeholder='Please enter your name' value = {this.state.value} onChange={this.handleChange} />
                         <br /> <br />
                         <label>AGE </label>
                         <input type = 'text' />
                         <br /> <br />
                         <input type = 'submit' value = 'CLICK ME!' />
                    </fieldset>
                </form>
             </div>
        )
    };
 }

 export default App;