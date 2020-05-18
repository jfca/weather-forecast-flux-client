import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
    convertKelvinToCelsius,
    getFontAwesomeIcon,
    getIconDescriptionFromCode
} from '../../utils/helperFuncs';

const CurrentTemp = ({weatherIcon, avgTemp}) => {
    return (
        <Fragment>
            <i id="current-temp-icon"
               className={getFontAwesomeIcon(weatherIcon, '8')}
               title={getIconDescriptionFromCode(weatherIcon)}>
            </i>
            <p id="avg-temp">{convertKelvinToCelsius(avgTemp)}</p>
        </Fragment>
    );
};

CurrentTemp.propTypes = {
    weatherIcon: PropTypes.string.isRequired,
    avgTemp: PropTypes.number.isRequired,
};

export default CurrentTemp;
