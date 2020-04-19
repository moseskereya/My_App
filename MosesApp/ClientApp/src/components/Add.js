import React, { Component } from 'react';
import Axios from "axios"
class Add extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstName : '',
            lastName : '',
            email : ''
         }
    }
    HandleSub = (e) =>{
        e.preventDefault()
       Axios.post('https://localhost:44317/api/customers', this.state)
        .then(response =>{
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    changeHandler = (e) =>{
        this.setState({[e.target.name] : e.target.value})
    }


    render() { 
        const {firstName, lastName, email} = this.state;
        return ( 
         <form className="form" onSubmit={this.HandleSub}>
            <input type="text" name="firstName" placeholder="Enter Your firstName" value={firstName}
             onChange={this.changeHandler} /><br/>
            <input type="text" name="lastName" placeholder="Enter Your lastName" value={lastName} 
            onChange={this.changeHandler} /><br/>
            <input type="email" name="email" placeholder="Enter Your Email" value={email} 
            onChange={this.changeHandler}  /><br/>
                 <button className="add">Add</button>
         </form>
         );
    }
}
 
export default Add;