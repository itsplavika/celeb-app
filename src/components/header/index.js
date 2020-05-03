import React from 'react';
import logo from '../../assets/logo.svg';
import Logo from '../logo';
import './header.css';

const Header = () => {

    return (
        <header>
            <div className="app-header" >
                <Logo logoImg={logo} />
            </div>
        </header>
    )
}

export default Header;