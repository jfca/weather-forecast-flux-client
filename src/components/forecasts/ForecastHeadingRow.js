import React from 'react';
import PropTypes from 'prop-types';
import {val_na, parseDate, buildIdFromDateString} from "../../utils/helperFuncs";

const ForecastHeadingRow = ({ daily_forecasts }) => {
    const key_id = 'fhr' + buildIdFromDateString(daily_forecasts[0].datetime);
    return (
        <tr>
            <td id={key_id} className="center-align">
                <strong>{val_na(parseDate(daily_forecasts[0].datetime)).trim()}</strong>
            </td>
            <td colSpan="3"/>
        </tr>
    );
};

ForecastHeadingRow.propTypes = {
    daily_forecasts: PropTypes.array.isRequired,
};

export default ForecastHeadingRow;