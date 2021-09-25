import React from 'react'
import {NavLink} from "react-router-dom";
import './Header.css';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function Header() {
    return (
        <div className={'dropdown-menu'}>
            <SuperButton className={'dropbtn'} style={{marginLeft: '10px'}}>Menu</SuperButton>
            <div className={'dropdown-content'}>
                <div className={'nav'}><NavLink to={"/pre-junior"}>Pre Junior</NavLink></div>
                <div className={'nav'}><NavLink to={"/junior"}>Junior</NavLink></div>
                <div className={'nav'}><NavLink to={"/junior-plus"}>Junior+</NavLink></div>
            </div>
        </div>
    )
}

export default Header
