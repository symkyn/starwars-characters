import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import User from '../User/User';
import axios from 'axios'

class About extends Component {
    state={
        user: {}
    }

    componentWillMount() {
        axios.get('http://localhost:3002/user')
            .then(results => {
                this.setState({
                    user: results.data
                })
            })
            .catch(err => console.log(err))
    }
    
    render(){
    return(
        <div>
            <User />
            <p>{this.state.user.about}</p>
            <Link to='/user'> <Button>Back</Button> </Link>
        </div>
    )}
}

export default About;