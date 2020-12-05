import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

//redux
import { HeaderToggleState } from "src/redux/headerToggleReducer"

import './header.scss';

const Header = () => {

    const displayState = useSelector((state: HeaderToggleState) =>state.className);

    return (
        <header className={`header ${displayState}`}>
            <div className="left">
                <div>MODELS</div>
                <NavLink to={'./home'} activeClassName='activeRoute'>Home</NavLink>
            </div>
            <div className="right">
                <NavLink to={'./login'} activeClassName='activeRoute'>Login</NavLink>
                <NavLink to={'./settings'} activeClassName='activeRoute'>Settings</NavLink>
            </div>
        </header>
    )
}

export default Header;