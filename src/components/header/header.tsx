import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

//redux
import { HeaderToggleState } from "src/redux/headerToggleReducer"

import './header.scss';
interface State {
    headerToggle: HeaderToggleState;
}

const Header = () => {

    const displayState = useSelector((state: State) => state.headerToggle.className);

    return (
        <header className={`header ${displayState}`}>
            <div className="left">
                <h3>Manager</h3>
                <NavLink to={'./home'} activeClassName='activeRoute'>Home</NavLink>
                <NavLink to={'./stocks'} activeClassName='activeRoute'>Stock</NavLink>
            </div>
            <div className="right">
                <NavLink to={'./login'} activeClassName='activeRoute'>Login</NavLink>
                <NavLink to={'./settings'} activeClassName='activeRoute'>Settings</NavLink>
            </div>
        </header>
    )
}

export default Header;