import React, {Fragment, useContext, useEffect, useState} from 'react';
import LocationContext from "../../context/location/locationContext";
import SettingsContext from "../../context/settings/settingsContext";

const Location = () => {
    const settingsContext = useContext(SettingsContext);
    const { iconClasses } = settingsContext;
    const locationContext = useContext(LocationContext);
    const { currentLocation } = locationContext;

    console.log(currentLocation);

    const [cityName, setCityName] = useState('')
    const [countryCode, setCountryCode] = useState('')

    useEffect(() => {
        if (currentLocation !== null) {
            setCityName(currentLocation.cityName);
            setCountryCode(currentLocation.countryCode);
        }
    }, [currentLocation]);

    return (
        <div className="location">
            <i
                alt="Current forecast location"
                className={`${iconClasses.locationIcon} fa-2x text-white mx-05`}
                title="Current forecast location"
            />
            {currentLocation !== null ? (
                <h2 className="mx-025 text-secondary text-lighten-1">
                    {cityName}, {countryCode}
                </h2>
            ) : (
                <span></span>
            )}
        </div>
    );
};

export default Location;