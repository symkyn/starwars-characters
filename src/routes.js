import React from 'react';
import { Switch, Route } from 'react-router-dom';
import User from './components/User/User';
import UserImage from './components/UserImage/UserImage';
import ContactInfo from './components/ContactInfo/ContactInfo';
import About from './components/About/About';
import Store from './components/Store/Store';
import Home from './components/Home/Home';

export default (
    <Switch>
        <Route exact path='/' component = { Home } />
        <Route path='/store' component = { Store } />
        <Route exact path='/user' component= { User } />
        <Route path='/user/img' component = { UserImage } />
        <Route path='/user/contact' component = { ContactInfo } />
        <Route path='/user/about' component = { About } />
    </Switch>
)