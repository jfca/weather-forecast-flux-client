import React from 'react';
import PropTypes from 'prop-types';
import ForecastDateHeading from "./ForecastDateHeading";
import ForecastHourlyColumn from "./ForecastHourlyColumn";
import {secToMill} from "../../utils/helperFuncs";

const ForecastDailyRow = ({forecastDate, hourlyForecasts}) => {
    return (
        <div className="forecast-daily-row bg-dark">
            <ForecastDateHeading forecastDate={forecastDate} />
            {hourlyForecasts.map(forecast => (
                <ForecastHourlyColumn key={new Date(secToMill(forecast.dt)).getHours().toString()} forecast={forecast} />
            ))}
        </div>
    );
};

ForecastDailyRow.propTypes = {
    forecastDate: PropTypes.number.isRequired,
    hourlyForecasts: PropTypes.array.isRequired,
};

export default ForecastDailyRow;