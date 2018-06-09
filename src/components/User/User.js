import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import axios from 'axios';

class User extends Component {
    state={
        user: {}
    }

    componentWillMount() {
        axios.get('http://localhost:3002/user')
        .then(results => (
            this.setState({
                user: results.data
            })
        ))
        .catch(err => console.warn(err))
    }

    render() {
    return(
        <div className='user-info'>
            <Link to='/user/img'><Button>Image</Button></Link>
            <Link to='/user/contact'><Button>Contact Info</Button></Link>
            <Link to='/user/about'><Button>About</Button></Link>
            <br />
            <p>{this.state.user.name}</p> 
        </div>
    )
    }
}

export default User;