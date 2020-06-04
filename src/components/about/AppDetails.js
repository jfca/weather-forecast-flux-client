import React, { useContext, useEffect} from 'react';
import SettingsContext from "../../context/settings/settingsContext";

const AppDetails = props => {
    const settingsContext = useContext(SettingsContext);
    const { appVersion, getAppVersion } = settingsContext;

    useEffect(() => {
        getAppVersion();
    }, []);

    return (
        <section id="app-details" className="app-details bg-dark p-1 m-1">
            <h1 id="app-title">About Weather Forecaster</h1>
            <p id="app-desc" className="lead my-1 mx-2">
                This is app shows the current weather, 5 day forecasts, and weather map for a selected location.
            </p>
            <h2>Version</h2>
            <p id="app-version" className="app-details__version mx-2"><strong>{appVersion}</strong></p>
        </section>
    );
};

export default AppDetails;