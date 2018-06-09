import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import User from '../User/User';
import axios from 'axios';

class ContactInfo extends Component {
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
            <p> Phone: {this.state.user.phoneNumber} </p>
            <p> Email: {this.state.user.email} </p>
            <Link to='/user'> <Button>Back</Button> </Link>
        </div>
    )}
}

export default ContactInfo;