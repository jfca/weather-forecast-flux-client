import React, {useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import LocationContext from "../../context/location/locationContext";

//@TODO show results in list as user types
//@TODO group cities by country code in <optgroup>s

const LocationForm = ({ icon, placeholder }) => {
    const locationContext = useContext(LocationContext);
    const { currentLocation, setCurrentLocation } = locationContext;

    useEffect(() => {
        console.log(currentLocation);
        if (currentLocation !== null) {
            setSearchTerm(`${currentLocation.cityName},${currentLocation.countryCode}`);
        } else {
            setSearchTerm('');
        }
    }, [currentLocation]);

    const [searchTerm, setSearchTerm] = useState('');

    const onChange = (e) => setSearchTerm(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        setCurrentLocation(searchTerm);
        console.log(currentLocation);
    };

    return (
        <div className="locationsearch">
            {/*<i className={`${icon} locationsearch__icon text-white`}></i>*/}
            <form className="locationsearch__form" onSubmit={onSubmit}>
                <div className="locationsearch__container">
                    <label
                        className="text-white text-small mx-075 mb-025"
                        htmlFor="location-search"
                    >Enter city name & country code</label>
                    <input
                        type="text"
                        name="location-search"
                        id="city-search"
                        className="locationsearch__input text-left mx-05 pl-05"
                        title="Enter city name & country code"
                        placeholder={placeholder}
                        onChange={onChange}
                    />
                    <input
                        className="visually-hidden"
                        type="submit"
                        value="submit"
                    />
                </div>
            </form>
        </div>
    );
};

LocationForm.propTypes = {
    icon: PropTypes.string,
    placeholder: PropTypes.string,
};

LocationForm.defaultProps = {
    icon: 'fas fa-search-location',
    placeholder: 'e.g. ottawa,ca',
};

export default LocationForm;