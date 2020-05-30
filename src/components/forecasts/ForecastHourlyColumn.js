import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
    convertKelvinToCelsius,
    getFontAwesomeIcon,
    getIconDescriptionFromCode,
    getWindDirection, secToMill
} from "../../utils/helperFuncs";
//@TODO should measurement unit constants be stored in settings state?
import {
    CLOUDINESS_UNITS,
    HUMIDITY_UNITS,
    PRESSURE_UNITS,
    RAINFALL_UNITS,
    SNOWFALL_UNITS,
    WINDSPEED_UNITS
} from "../../utils/constants";
import SettingsContext from "../../context/settings/settingsContext";

const ForecastHourlyColumn = ({ forecast }) => {
    const settingsContext = useContext(SettingsContext);
    const { theme } = settingsContext;

    const options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
    }

    return (
        <ul className="forecast-hourly-col text-center text-large">
            <li>
                <p
                    className="mx-1"
                    title={new Intl.DateTimeFormat(theme.locale, theme.intlDateOptions).format(secToMill(forecast.dt))}
                >
                    {new Intl.DateTimeFormat(theme.locale, options).format(secToMill(forecast.dt))}
                </p>
            </li>
            <li>
                <i
                    className={`${getFontAwesomeIcon(forecast.weather[0].icon, '2')} ${'mx-1'}`}
                    title={getIconDescriptionFromCode(forecast.weather[0].icon)}>
                </i>
            </li>
            <li>
                <p
                    className="text-primary text-lighten-2 text-x-large mx-1"
                    title="temperature">{convertKelvinToCelsius(forecast.main.temp)}
                </p>
            </li>
            {/* Wind Speed */}
            {forecast.wind.speed !== undefined ?
                (<li>
                    <p
                        className="mx-1"
                        title="wind speed">{forecast.wind.speed + WINDSPEED_UNITS}
                        {/*title="wind speed">{String(forecast.wind.speed + WINDSPEED_UNITS).trim()}*/}
                    </p>
                </li>)
                : ''
            }
            {/* Wind Direction */}
            {forecast.wind.deg !== undefined ?
                (<li>
                    <p
                        className="mx-1"
                        title="wind direction">{getWindDirection(forecast.wind.deg)}
                    </p>
                </li>)
                : ''
            }
            {/* Humidity */}
            {forecast.main.humidity !== undefined ?
                (<li>
                    <p
                        className="mx-1"
                        title="humidity">{forecast.main.humidity + HUMIDITY_UNITS}
                    </p>
                </li>)
                : ''
            }
            {/* Atmospheric Pressure */}
            {forecast.main.pressure !== undefined ?
                (<li>
                    <p
                        className="mx-1"
                        title="atmospheric pressure">{forecast.main.pressure + PRESSURE_UNITS}
                    </p>
                </li>)
                : ''
            }
            {/* Cloudiness */}
            {forecast.clouds.all !== undefined ?
                (<li>
                    <p
                        className="mx-1"
                        title="cloudiness">{forecast.clouds.all + CLOUDINESS_UNITS}
                    </p>
                </li>)
                : ''
            }
            {/* Rainfall */}
            {forecast.rain !== undefined && forecast.rain['1h'] !== undefined ?
                (<li>
                    <p
                        className="mx-1"
                        title="rainfall">{forecast.rain['1h'] + RAINFALL_UNITS}
                    </p>
                </li>)
                : ''
            }
            {/* Snowfall */}
            {forecast.snow !== undefined && forecast.snow['1h'] !== undefined ?
                (<li>
                    <p
                        className="mx-1"
                        title="rainfall">{forecast.snow['1h'] + SNOWFALL_UNITS}
                    </p>
                </li>)
                : ''
            }
        </ul>
    );
};

ForecastHourlyColumn.propTypes = {
    forecast: PropTypes.object.isRequired,
};

export default ForecastHourlyColumn;