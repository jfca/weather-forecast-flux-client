import React from 'react';
import PropTypes from 'prop-types';
import {val_na, parseDate, buildIdFromDateString} from "../../../utils/helperFuncs";
import ForecastDataRow from "./ForecastDataRow";

const ForecastHeadingRow = ({ daily_forecasts }) => {
    const key_id = 'fhr' + buildIdFromDateString(daily_forecasts[0].datetime);
    return (
        <li key={key_id} id="fhr">
            {
                <h1 id={key_id}>
                    {val_na(parseDate(daily_forecasts[0].datetime))}
                </h1>
            }
        </li>
    );
};

ForecastHeadingRow.propTypes = {
    daily_forecasts: PropTypes.array.isRequired,
};

export default ForecastHeadingRow;