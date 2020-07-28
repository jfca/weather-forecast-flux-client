import React from 'react';
import PropTypes from 'prop-types';
import CurrentWeatherRow from "./CurrentWeatherRow";

const CurrentWeatherSection = ({ currentforecast }) => {
    return (
        <div id="cws">
            <h1>Current Weather</h1>
            <CurrentWeatherRow currentforecast={currentforecast}/>
        </div>
    );
};

CurrentWeatherSection.propTypes = {
    currentforecast: PropTypes.object.isRequired,
};

export default CurrentWeatherSection;