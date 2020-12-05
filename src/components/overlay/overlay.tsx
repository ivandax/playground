import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { hideHeader } from 'src/redux/actions';

//redux
import { HeaderToggleState } from "src/redux/headerToggleReducer"

import './Overlay.scss';

const Overlay = () => {
    const displayState = useSelector((state: HeaderToggleState)=>state.className);

    const dispatch = useDispatch();

    const handleOverlayClick = () => {
      dispatch(hideHeader());
    }    

    return (
        <div className={`overlay ${displayState}`} onClick={handleOverlayClick}>
        </div>
    )
}

export default Overlay;