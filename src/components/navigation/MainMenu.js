import React, { Fragment } from 'react';
import { NavLink } from "react-router-dom";

const MainMenu = props => {
    return (
        <Fragment>
            <ul id="main-menu">
                {/*<li><NavLink to='/' activeClassName='bg-$color-secondary-base'>Home</NavLink></li>*/}
                <li><NavLink to='/current' activeClassName='bg-menu'>Current Weather</NavLink></li>
                <li><NavLink to='/maps' activeClassName='bg-menu'>Weather Maps</NavLink></li>
                <li><NavLink to='/about' activeClassName='bg-menu'>About</NavLink></li>
            </ul>
        </Fragment>
    );
};

export default MainMenu;