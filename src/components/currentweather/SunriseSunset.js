import React, {Fragment, useContext} from 'react';
import PropTypes from 'prop-types';
import {secToMill} from "../../utils/helperFuncs";
import SettingsContext from "../../context/settings/settingsContext";

//@TODO store icon class information in settings state
const SunriseSunset = (
    {
        sunriseIcon,
        sunriseTime,
        sunsetIcon,
        sunsetTime
    }) => {
    const settingsContext = useContext(SettingsContext);
    const { theme } = settingsContext;

    const options = {
        hour: theme.intlDateOptions.hour,
        minute: theme.intlDateOptions.minute,
        seconds: theme.intlDateOptions.seconds,
        hour12: theme.intlDateOptions.hour12,
        timeZone: theme.intlDateOptions.timeZone,
    }

    return (
        <Fragment>
            <div className="sunrise-sunset">
                <i className={`${sunriseIcon} text-white`} title="sunrise"></i>
                <span className="sunrise-sunset__time mx-1 text-xx-large">{new Intl.DateTimeFormat(theme.locale, options).format(secToMill(sunriseTime))}</span>
            </div>
            <div className="sunrise-sunset">
                <i className={`${sunsetIcon} text-white`} title="sunset"></i>
                <span className="sunrise-sunset__time mx-1 text-xx-large">{new Intl.DateTimeFormat(theme.locale, options).format(secToMill(sunsetTime))}</span>
            </div>
        </Fragment>
    );
};

SunriseSunset.propTypes = {
    sunriseIcon: PropTypes.string.isRequired,
    sunriseTime: PropTypes.number.isRequired,
    sunsetIcon: PropTypes.string.isRequired,
    sunsetTime: PropTypes.number.isRequired,
};

SunriseSunset.defaultProps = {
    sunriseIcon: 'far fa-sun fa-3x',
    sunsetIcon: 'fas fa-moon fa-3x',
};

export default SunriseSunset;