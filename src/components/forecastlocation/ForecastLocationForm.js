import React, {useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import LocationContext from "../../context/forecastlocation/locationContext";

//@TODO show results in list as user types
//@TODO group cities by country code in <optgroup>s

const ForecastLocationForm = ({ icon, placeholder }) => {
    const forecastlocationContext = useContext(LocationContext);
    const { currentLocation, setCurrentLocation } = forecastlocationContext;

    useEffect(() => {
        console.log(currentLocation);
        if (currentLocation !== null) {
            setsearchTerm(`${currentLocation.cityName},${currentLocation.countryCode}`);
        } else {
            setsearchTerm('');
        }
    }, [forecastlocationContext, currentLocation]);

    const [searchTerm, setsearchTerm] = useState('');

    const onChange = (e) => setsearchTerm(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        setCurrentLocation(searchTerm);
        console.log(currentLocation);
    };

    return (
        <form id="search-form" onSubmit={onSubmit}>
            <div id="search-form-input-container">
                <i className={icon}></i>
                <input
                    type="text"
                    name="city-search"
                    id="city-search"
                    placeholder={placeholder}
                    title="e.g. ottawa, ca"
                    onChange={onChange}
                />
                <input className="visually-hidden" type="submit" value="submit"/></div>
        </form>
    );
};

ForecastLocationForm.propTypes = {
    icon: PropTypes.string,
    placeholder: PropTypes.string,
};

ForecastLocationForm.defaultProps = {
    icon: 'fas fa-search-location fa-2x',
    placeholder: 'Enter city name and country code...',
};

export default ForecastLocationForm;