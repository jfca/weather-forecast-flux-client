import React from 'react';
import PropTypes from 'prop-types';
import LocationName from "./LocationName";

const LocationSection = ({ country, city }) => {
    return (
        <div id="location-section" className="row">
            <div className="col s12">
                <LocationName country={country} city={city}/>
            </div>
        </div>
    );
};

LocationSection.propTypes = {
    country: PropTypes.object.isRequired,
    city: PropTypes.object.isRequired,
};

export default LocationSection;