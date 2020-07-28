import React, {Fragment, useContext} from 'react';
import PropTypes from 'prop-types';
import {secToMill, val_na} from "../../utils/helperFuncs";
import SettingsContext from "../../context/settings/settingsContext";

const CurrentDate = ({ currentDate }) => {
    const settingsContext = useContext(SettingsContext);
    const { theme } = settingsContext;

    return (
        <Fragment>
            <h1>
                {val_na(new Intl.DateTimeFormat(theme.locale, theme.intlDateOptions)
                    .format(secToMill(currentDate)))}
            </h1>
        </Fragment>
    );
};

CurrentDate.propTypes = {
    currentDate: PropTypes.number.isRequired,
};

export default CurrentDate;