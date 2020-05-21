import React, {Fragment, useContext} from 'react';
import LocationContext from "../../context/forecastlocation/locationContext";
import SettingsContext from "../../context/settings/settingsContext";

const ForecastLocation = () => {
    const settingsContext = useContext(SettingsContext);
    const { iconClasses } = settingsContext;
    const forecastlocationContext = useContext(LocationContext);
    const { currentLocation } = forecastlocationContext;

    return (
        <p id="forecast-location">
            { currentLocation !== null ? (
                <Fragment>
                    <i className={iconClasses.forecastLocationIcon}></i>
                    <span>{currentLocation.cityName}, {currentLocation.countryCode}</span>
                </Fragment>
            ) : (
                <span></span>
            )}
        </p>
    );
};

export default ForecastLocation;