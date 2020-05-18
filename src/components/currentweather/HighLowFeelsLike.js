import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import {convertKelvinToCelsius} from "../../utils/helperFuncs";

const HighLowFeelsLike = (
    {
        lowtempVal,
        hightempVal,
        feelslikeVal,
        lowtempIcon,
        hightempIcon,
        feelslikeIcon
    }) => {
    return (
        <Fragment>
            <p>
                <i className={lowtempIcon} title="low temperature"></i>
                <span>{convertKelvinToCelsius(lowtempVal)}</span>
            </p>
            <p>
                <i className={feelslikeIcon} title="feels like temperature"></i>
                <span>{convertKelvinToCelsius(feelslikeVal)}</span>
            </p>
            <p>
                <i className={hightempIcon} title="high temperature"></i>
                <span>{convertKelvinToCelsius(hightempVal)}</span>
            </p>
        </Fragment>
    );
};

HighLowFeelsLike.propTypes = {
    lowtempIcon: PropTypes.string.isRequired,
    hightempIcon: PropTypes.string.isRequired,
    feelslikeIcon: PropTypes.string.isRequired,
    lowtempVal: PropTypes.number.isRequired,
    hightempVal: PropTypes.number.isRequired,
    feelslikeVal: PropTypes.number.isRequired,
};

HighLowFeelsLike.defaultProps = {
    lowtempIcon: 'fas fa-temperature-low fa-3x',
    hightempIcon: 'fas fa-temperature-high fa-3x',
    feelslikeIcon: 'far fa-hand-spock fa-3x',
};

export default HighLowFeelsLike;