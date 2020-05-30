import React, {Fragment, useContext} from 'react';
import {NavLink} from "react-router-dom";
import LocationContext from "../../context/location/locationContext";

const Navigation = () => {
    const locationContext = useContext(LocationContext);
    const { currentLocation } = locationContext;

    const locationLinks = (
        <Fragment>
            <li className="navigation__listitem">
                <NavLink
                    to='/'
                    className="navigation__link"
                    activeClassName="navigation__link--current"
                >Home</NavLink>
            </li>
            <li className="navigation__listitem">
                <NavLink
                    to='/current'
                    className="navigation__link"
                    activeClassName="navigation__link--current"
                >Current Weather</NavLink>
            </li>
            <li className="navigation__listitem">
                <NavLink
                    to='/maps'
                    className="navigation__link"
                    activeClassName="navigation__link--current"
                >Weather Maps</NavLink>
            </li>
            <li className="navigation__listitem">
                <NavLink
                    to='/about'
                    className="navigation__link"
                    activeClassName="navigation__link--current"
                >About</NavLink>
            </li>
        </Fragment>
    );

    const noLocationLinks = (
        <Fragment>
            <li className="navigation__listitem">
                <NavLink
                    to='/'
                    className="navigation__link"
                    activeClassName="navigation__link--current"
                >Home</NavLink>
            </li>
            <li className="navigation__listitem">
                <NavLink
                    to='/about'
                    className="navigation__link"
                    activeClassName="navigation__link--current"
                >About</NavLink>
            </li>
        </Fragment>
    )

    return (
        <nav className="navigation">
            <ul className="navigation__list">
                {currentLocation !== null ? locationLinks : noLocationLinks}
            </ul>
        </nav>
    );
};

export default Navigation;