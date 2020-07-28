import React from 'react';
import PropTypes from 'prop-types';

const LocationName = ({ country, city }) => {
    return (
        <div id="location-name" className="card">
            <div className="card-content">
                <div className="card-title">
                    <span>{country.name}, {city.name}</span>
                </div>
            </div>
        </div>
    );
};

LocationName.propTypes = {
    country: PropTypes.object.isRequired,
    city: PropTypes.object.isRequired,
};

export default LocationName;