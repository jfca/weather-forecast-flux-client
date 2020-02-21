import React from 'react';
import PropTypes from 'prop-types';
import {buildIdFromDateString, parseTime, val_na} from "../../utils/helperFuncs";

const ForecastDataRow = ({ forecasts }) => {
    return (forecasts.map((forecast, i) => {
        return (
            <tr key={i} id={'forecast-data-row' + buildIdFromDateString(forecast.datetime)}>
                <td id="hour" className="center-align">
                    {val_na(parseTime(forecast.datetime))}
                </td>
                <td id="icon" className="center-align">
                    <img src={forecast.iconurl} alt={val_na(forecast.alt_desc)}/>
                </td>
                <td id="min-temp" className="center-align">{val_na(forecast.min_temp)}</td>
                <td id="max-temp" className="center-align">{val_na(forecast.max_temp)}</td>.
            </tr>
        )
    }))
};

ForecastDataRow.propTypes = {
    forecasts: PropTypes.array.isRequired,
};

export default ForecastDataRow;