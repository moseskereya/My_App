import React, { Component } from 'react';
import {Link} from "react-router-dom"
import axios from "axios"
class customer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            peoples : [], 
            loading :true
         }
    }

componentDidMount = () =>{
    axios.get('https://localhost:44317/api/customers')
    .then(response =>{
        console.log(response.data)
        this.setState({peoples: response.data})
    })

    .catch(error => {
        console.log(error, "No data in your database ")
    })
}

    render() { 
        const items = this.state.peoples
        return ( 
            <div>
                  <table>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                    </tr>
                  {items.map(names => {
                      return(
                          <tr>
                            <td>{names.firstName}</td>
                            <td>{names.lastName}</td>
                            <td>{names.email}</td>
                        </tr>
                      )
                  })}
                 </table>
                 <Link to = "/new">
                     <button className="add">Add New</button>
                 </Link>
            </div>
         );
    }
}
 
export default customer;