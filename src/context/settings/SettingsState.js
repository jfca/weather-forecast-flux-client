import React, { useReducer } from "react";
import SettingsContext from './settingsContext';
import settingsReducer from './settingsReducer';
import { storageAvailable } from "../../utils/helperFuncs";

import {
    GET_APP_VERSION,
    SET_APP_VERSION,
} from "../types";

const SettingsState = props => {
    const initialState = {
        appVersion: null,
        iconClasses: {
            locationIcon: 'fas fa-map-marker-alt',
        },
        atmosphereUnits: {
            windspeed: 'm/s',
            humidity: '%',
            pressure: 'hPa',
            cloudiness: '%',
            rainfall: 'mm',
            snowfall: 'mm'
        },
        theme: {
            locale: "en-CA",
            unitsOfMeasure: {
                temp: 'metric', // units metric, imperial. When you do not use units parameter, format is Standard by default.
            },
            intlDateOptions: {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
                timeZone: 'America/Toronto',
                timeZoneName: 'short'
            },
        },
    };

    const [state, dispatch] = useReducer(settingsReducer, initialState);

    const populateDefaultLocalStorage = () => {

    };

    //Add action functions here
    // GET_APP_VERSION
    const getAppVersion = () => {
        if (storageAvailable('localStorage')) {
            if (!localStorage.getItem('appversion')) {

            }
        }
        else {
            // Too bad, no localStorage for us
            console.log('localStorage not available');
        }

        dispatch({
            type: GET_APP_VERSION,
            payload: '1.0.0'
        })
    };

    // SET_APP_VERSION
    // const setAppVersion = (appVersion) => {
    //     if (storageAvailable('localStorage')) {
    //         dispatch({
    //             type: SET_APP_VERSION,
    //             payload: localStorage.setItem('appVersion');
    //         })
    //     }
    //     else {
    //         // Too bad, no localStorage for us
    //         console.log('localStorage not available');
    //     }
    // };

    // GETLOCALE

    // SET_LOCALE

    // GET_UNITS_OF_MEASURE

    // SET_UNITS_OF_MEASURE

    // GET_INTL_DATE_OPTIONS

    // SET_INTL_DATE_OPTIONS


    return (
        <SettingsContext.Provider
            value={{
                appVersion: state.appVersion,
                iconClasses: state.iconClasses,
                theme: state.theme,
                getAppVersion
            }}>
            {props.children}
        </SettingsContext.Provider>
    )
};

export default SettingsState;