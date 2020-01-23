import React from 'react'
import axios from 'axios'

import './user.css'
import UserBody from '../components/view_all_user'

class User extends React.Component {

    state = {
        mydata: []
    }



    componentDidMount() {
        axios.get("http://localhost:5000/view").then(res => {
            //console.log(res)
            this.setState({ mydata: res.data })
        })
    }


    render() {
        const mydata222 = this.state.mydata.map(hlists => {
            return <UserBody 
                id={hlists._id} 
                first_name={hlists.first_name} 
                last_name={hlists.last_name}
                gender={hlists.gender}
                mobile={hlists.mobile} />
        })
        return (
            <section>
                <div className="user">
                    <h1>Detail of user</h1>{mydata222}
                </div>
            </section>
        )
    }
}

export default User