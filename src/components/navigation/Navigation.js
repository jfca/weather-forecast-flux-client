import React, {Fragment, useContext} from 'react';
import {NavLink} from "react-router-dom";
import ForecastLocationContext from "../../context/forecastlocation/forecastlocationContext";

const Navigation = () => {
    const forecastlocationContext = useContext(ForecastLocationContext);
    const { currentLocation } = forecastlocationContext;

    const locationLinks = (
        <Fragment>
            {/*<li><NavLink to='/' activeClassName='bg-$color-secondary-base'>Home</NavLink></li>*/}
            <li><NavLink to='/current' activeClassName='current'>Current Weather</NavLink></li>
            <li><NavLink to='/maps' activeClassName='current'>Weather Maps</NavLink></li>
            <li><NavLink to='/about' activeClassName='current'>About</NavLink></li>
        </Fragment>
    );

    const noLinks = (
        <Fragment>
            <li></li>
        </Fragment>
    )

    return (
        <ul id="navigation">
            { currentLocation !== null ? locationLinks : noLinks }
        </ul>
    );
};

export default Navigation;