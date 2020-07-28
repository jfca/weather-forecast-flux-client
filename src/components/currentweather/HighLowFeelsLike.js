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
            <div className="mx-5">
                <i className={`${lowtempIcon} text-white`} title="low temperature"></i>
                <span className="ml-1 title-uc text-35">{convertKelvinToCelsius(lowtempVal)}</span>
            </div>
            <div className="mx-5">
                <i className={`${feelslikeIcon} text-white`} title="feels like temperature"></i>
                <span className="ml-1 title-uc text-35">{convertKelvinToCelsius(feelslikeVal)}</span>
            </div>
            <div className="mx-5">
                <i className={`${hightempIcon} text-white`} title="high temperature"></i>
                <span className="ml-1 title-uc text-35">{convertKelvinToCelsius(hightempVal)}</span>
            </div>
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