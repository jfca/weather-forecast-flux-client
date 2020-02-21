import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Map = ({ city }) => {
    return (
        //@TODO replace image with map tiles using coord
        <Fragment>
            <img width="25%"
                 height="25%"
                 id="location-map"
                 src="./src/components/locations/hong_kong.jpg"
                 alt={`Map of ${city.name}`}
            />
        </Fragment>
    );
};

Map.propTypes = {
    city: PropTypes.object.isRequired,
};

export default Map;