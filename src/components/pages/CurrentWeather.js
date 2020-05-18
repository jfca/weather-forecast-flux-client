import React, { Fragment } from 'react';
import CurrentWeatherDetails from "../currentweather/CurrentWeatherDetails";
import CurrentForecastDetails from "../forecasts/CurrentForecastDetails";

const CurrentWeather = props => {
    return (
        <Fragment>
            <CurrentWeatherDetails />
            <CurrentForecastDetails />
        </Fragment>
    );
};

export default CurrentWeather;
