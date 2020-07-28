import React from 'react';
import PropTypes from 'prop-types';

const CitySelectOptions = ({ cities }) => {
    return (
        cities.all.map(city_code => {
            return (
                <option key={city_code} value={city_code}>
                    {cities.byId[city_code].name}
                </option>
            )
        })
    );
};

CitySelectOptions.propTypes = {
    cities: PropTypes.object.isRequired,
};

export default CitySelectOptions;