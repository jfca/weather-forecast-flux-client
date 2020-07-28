import React from 'react';
import PropTypes from 'prop-types';
import Map from "./Map";

const MapSection = ({ city }) => {
    return (
        <div id="map-section" className="row">
            <div className="col s12">
                <Map city={city}/>
            </div>
        </div>
    );
};

MapSection.propTypes = {
    city: PropTypes.object.isRequired,
};

export default MapSection;