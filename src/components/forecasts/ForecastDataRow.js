import React from 'react';
import PropTypes from 'prop-types';
import {buildIdFromDateString, parseTime, val_na} from "../../../utils/helperFuncs";

const ForecastDataRow = ({ forecasts }) => {
    return (forecasts.map((forecast,i) => {
        return (
            <li key={'fdr' + i + buildIdFromDateString(forecasts.datetime)} id="fdr">
                <div id="hour">
                    { val_na(parseTime(forecast.datetime)) }
                </div>
                <div id="icon">
                    <img src={forecast.iconurl} alt={val_na(forecast.alt_desc)}/>
                </div>
                <div id="min-temp">{ val_na(forecast.min_temp) }</div>
                <div id="max-temp">{ val_na(forecast.max_temp) }</div>
            </li>
        )
    }))
};

ForecastDataRow.propTypes = {
    forecasts: PropTypes.array.isRequired,
};

export default ForecastDataRow;