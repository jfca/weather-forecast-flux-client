import React, {useContext} from 'react';
import Navigation from "../navigation/Navigation";
import ForecastLocationForm from "../forecastlocation/ForecastLocationForm";
import ForecastLocation from "../forecastlocation/ForecastLocation";

const Header = props => {
    return (
        <header id="app-header">
            <div id="app-header-wrapper">
                <ForecastLocationForm/>
                <ForecastLocation/>
                <Navigation/>
            </div>
        </header>
    );
};

export default Header;