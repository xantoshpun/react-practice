import React from 'react'
import axios from 'axios'
import { Route, NavLink, Switch } from 'react-router-dom'

import './user.css'
class UserBody extends React.Component {

    deleteUser = () => {
        axios.delete('http://localhost:5000/deleteuser/' + this.props.id)
        window.location.reload(false)
    }

    render() {
        
        return (
            <section>
                <div className="userEach">
                    
                    <h2>{this.props.first_name} {this.props.last_name}</h2>
                    
                    <p><button id="del" onClick={this.deleteUser}>Delete</button></p>
                    <NavLink to={"/singleuser/"+this.props.id}>View</NavLink>


                </div>

            </section>
        )
    }
}

export default UserBody;
