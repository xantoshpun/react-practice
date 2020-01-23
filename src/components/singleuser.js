import React from 'react'
import axios from 'axios'

import './user.css'
class SingleUser extends React.Component {
    state = {
        singledata: []
    }



    componentDidMount() {
        axios.get("http://localhost:5000/singleuser/"+this.props.match.params.id).then(res => {
            //console.log(res)
            this.setState({ singledata: res.data })
        })
    }
    render(){
        return(
            <div class="UserEach">
                <h2>{this.state.singledata.first_name} {this.state.singledata.last_name}</h2>
                <p>Gender: {this.state.singledata.gender}</p>
                <p>Contact him at {this.state.singledata.mobile}</p>
            </div>
        )
    }
}

export default SingleUser