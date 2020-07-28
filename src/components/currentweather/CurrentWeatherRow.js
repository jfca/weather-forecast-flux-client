import React from 'react';
import PropTypes from 'prop-types';
import { convertKelvinToCelsius, val_na } from '../../../utils/helperFuncs';

const CurrentWeatherRow = ({ currentforecast:
    { avg_temp, short_desc, description, humidity, winddegree, windspeed} }) => {
    return (
        <div id="cwr">
            <p>
                <span id="avg-temp">{ val_na(avg_temp) }</span>
                <span id="short-desc">, { val_na(short_desc) }</span>
            </p>
            <p id="desc">{ val_na(description)}</p>
            <p>
                <span>Humidity: </span>
                <span id="humidity">{ val_na(humidity) }%</span>
            </p>
            <p>
                <span>Wind: </span>
                <span id="winddegree">{ val_na(winddegree) } </span>
                <span id="windspeed">{ val_na(windspeed) } m/s</span>
            </p>
        </div>
    );
};

CurrentWeatherRow.propTypes = {
    currentforecast: PropTypes.object.isRequired,
};

export default CurrentWeatherRow;
