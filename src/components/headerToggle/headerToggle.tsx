import React from 'react';
import { useDispatch } from 'react-redux';

import { showHeader } from 'src/redux/actions'; 

import LittleBurger from 'src/components/littleBurger';

import './HeaderToggle.scss';

const HeaderToggle = () => {

    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(showHeader());
    }

    return (
        <div className="headerToggle">
            <LittleBurger handleToggle={handleToggle}/>
        </div>
    )
}

export default HeaderToggle;