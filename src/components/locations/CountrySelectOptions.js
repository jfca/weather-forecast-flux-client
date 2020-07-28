import React from 'react';
import PropTypes from 'prop-types';

const CountrySelectOptions = ({ countries }) => {
    return (
        countries.all.map(country_code => {
            return (
                <option key={country_code} value={country_code}>
                    {countries.byId[country_code].name} ({countries.byId[country_code]["alpha-2"]})
                </option>
            )
        })
    );
};

CountrySelectOptions.propTypes = {
    countries: PropTypes.object.isRequired,
};

export default CountrySelectOptions;