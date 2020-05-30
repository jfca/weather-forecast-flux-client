import React, {useContext} from 'react';
import Navigation from "../navigation/Navigation";
import LocationForm from "../location/LocationForm";
import Location from "../location/Location";

const Header = props => {
    return (
        <header className="app-header">
            <div className="app-header__container">
                <LocationForm/>
                <Location/>
                <Navigation/>
            </div>
        </header>
    );
};

export default Header;