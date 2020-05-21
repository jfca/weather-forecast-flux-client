import React, {Fragment, useContext} from 'react';
import {NavLink} from "react-router-dom";
import LocationContext from "../../context/forecastlocation/locationContext";

const Navigation = () => {
    const forecastlocationContext = useContext(LocationContext);
    const { currentLocation } = forecastlocationContext;

    const locationLinks = (
        <Fragment>
            <li><NavLink to='/' activeClassName='current'>Home</NavLink></li>
            <li><NavLink to='/current' activeClassName='current'>Current Weather</NavLink></li>
            <li><NavLink to='/maps' activeClassName='current'>Weather Maps</NavLink></li>
            <li><NavLink to='/about' activeClassName='current'>About</NavLink></li>
        </Fragment>
    );

    const noLocationLinks = (
        <Fragment>
            <li><NavLink to='/' activeClassName='current'>Home</NavLink></li>
            <li><NavLink to='/about' activeClassName='current'>About</NavLink></li>
        </Fragment>
    )

    return (
        <ul id="navigation">
            { currentLocation !== null ? locationLinks : noLocationLinks }
        </ul>
    );
};

export default Navigation;