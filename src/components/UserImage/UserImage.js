import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import User from '../User/User';
import axios from 'axios';

class UserImage extends Component {
    state={
        user: {},
        newURL: ''
    }

    componentWillMount() {
        axios.get('http://localhost:3002/user')
            .then(results => {
                this.setState({
                    user: results.data
                })
            })
            .catch(err => console.warn(err))
    }

    render(){
    return(
        <div>
            <User />
            <img src={this.state.user.imageURL} alt='../../errorstop.png' />
            <br/>
            <span>
                <Link to='/user'> <Button>Back</Button> </Link>
                <form onSubmit={() => this.handleSubmit()}>
                    <input  
                            value={this.state.newURL}
                            onChange={(event) => this.handleChange(event)} 
                        />
                    <Button>Change</Button>                
                </form>    
            </span>
        </div>
    )}

    handleChange(event){
        this.setState({
            newURL: event.target.value
        });
    }

    handleSubmit() {
        let userInfo = this.state.user;
        userInfo.imageURL = this.state.newURL;
        axios.patch('http://localhost:3002/user/url', userInfo)
            .then(results => {
                this.setState({
                    user: results.data
                })
            })
            .catch(err => console.log(err))
    }
}

export default UserImage;