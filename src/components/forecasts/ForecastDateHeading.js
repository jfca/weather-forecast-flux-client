import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {secToMill} from "../../utils/helperFuncs";

const ForecastDateHeading = ({ forecastDate, locale }) => {

    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    }

    return (
        <Fragment>
            <h2 className="forecast-date-heading">
                {new Intl.DateTimeFormat(locale, options).format(secToMill(forecastDate))}
            </h2>
        </Fragment>
    );
};

ForecastDateHeading.propTypes = {
    forecastDate: PropTypes.number.isRequired,
    locale: PropTypes.string,
};

ForecastDateHeading.defaultProps = {
    locale: 'en-CA',
};

export default ForecastDateHeading;