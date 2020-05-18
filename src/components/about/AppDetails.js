import React, { useContext, useEffect} from 'react';
import SettingsContext from "../../context/settings/settingsContext";

const AppDetails = props => {
    const settingsContext = useContext(SettingsContext);
    const { appVersion, getAppVersion } = settingsContext;

    useEffect(() => {
        getAppVersion();
    }, []);

    return (
        <div id="app-details">
            <h1 id="app-title">About Weather Forecaster</h1>
            <p id="app-desc">
                This is app shows the current weather, 5 day forecasts, and weather map for a selected location.
            </p>
            <p id="app-version"><strong>Version:&nbsp;{appVersion}</strong></p>
        </div>
    );
};

export default AppDetails;