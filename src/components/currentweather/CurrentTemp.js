import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
    convertKelvinToCelsius,
    getFontAwesomeIcon,
    getIconDescriptionFromCode
} from '../../utils/helperFuncs';

const CurrentTemp = ({weatherIcon, avgTemp}) => {
    return (
        <div className="current-temp">
            <i id="current-temp-icon"
               className={`current-temp__icon text-white ${getFontAwesomeIcon(weatherIcon, '8')}`}
               title={getIconDescriptionFromCode(weatherIcon)}>
            </i>
            <span id="avg-temp" className="current-temp__temp title-uc ml-3">{convertKelvinToCelsius(avgTemp)}</span>
        </div>
    );
};

CurrentTemp.propTypes = {
    weatherIcon: PropTypes.string.isRequired,
    avgTemp: PropTypes.number.isRequired,
};

export default CurrentTemp;
