import React from 'react';
import PropTypes from 'prop-types';
import CurrentWeatherRow from "./CurrentWeatherRow";

const CurrentWeatherSection = ({ currentforecast }) => {
    return (
        <div id="current-weather-section" className="row">
            <div className="col s12">
                <div className="card">
                    <div className="card-content">
                        <span id="current-weather-title" className="card-title">Current Weather</span>
                        <CurrentWeatherRow currentforecast={currentforecast}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

CurrentWeatherSection.propTypes = {
    currentforecast: PropTypes.object.isRequired,
};

export default CurrentWeatherSection;