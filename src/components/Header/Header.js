import React from 'react';
import './Header.css';

import Button from '../Button/Button'

import { Link } from 'react-router-dom';

const Header = ()=> (
    <header>
        <h1>Store Destroyer</h1>
            <Link to='/'> <Button>Home</Button> </Link>
            <Link to='/user'> <Button>User Info</Button> </Link>
            <Link to='/store'> <Button>Store</Button> </Link>
    </header>
)

export default Header;