import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import PercentageCircle from "./PercentageCircle";
import { getWindDirection } from "../../utils/helperFuncs";
import {
    WINDSPEED_UNITS,
    HUMIDITY_UNITS,
    PRESSURE_UNITS,
    CLOUDINESS_UNITS,
    RAINFALL_UNITS,
    SNOWFALL_UNITS
} from "../../utils/constants";

const Atmosphere = ({currentweather}) => {
    return (
        <Fragment>
            {/* Wind Speed */}
            {currentweather.wind.speed !== undefined ?
                (<PercentageCircle title={'Wind Speed'}
                                   value={currentweather.wind.speed + WINDSPEED_UNITS}/>)
                : ''
            }
            {/* Wind Direction */}
            {currentweather.wind.deg !== undefined ?
                (
                    <PercentageCircle title={'Wind Direction'}
                                      value={getWindDirection(currentweather.wind.deg)}
                    />) : ''
            }
            {/* Humidity */}
            {currentweather.main.humidity !== undefined ?
                (<PercentageCircle title={'Humidity'}
                                   value={currentweather.main.humidity + HUMIDITY_UNITS}/>)
                : ''
            }
            {/* Atmospheric Pressure */}
            {currentweather.main.pressure !== undefined ?
                (<PercentageCircle title={'Pressure'}
                                   value={currentweather.main.pressure + PRESSURE_UNITS}/>)
                : ''
            }
            {/* Cloudiness */}
            {currentweather.clouds !== undefined && currentweather.clouds.all !== undefined ?
                (<PercentageCircle title={'Cloundiness'}
                                   value={currentweather.clouds.all + CLOUDINESS_UNITS}/>)
                : ''
            }
            {/* Rainfall */}
            {currentweather.rain !== undefined && currentweather.rain['1h'] !== undefined ?
                (<PercentageCircle title={'Rainfall'}
                                   value={currentweather.rain['1h'] + RAINFALL_UNITS}/>)
                : ''
            }
            {/* Snowfall */}
            {currentweather.snow !== undefined && currentweather.snow['1h'] !== undefined ?
                (<PercentageCircle title={'Snowfall'}
                                   value={currentweather.snow['1h'] + SNOWFALL_UNITS}/>)
                : ''
            }
        </Fragment>
    );
};

Atmosphere.propTypes = {
    currentweather: PropTypes.object.isRequired,
}

export default Atmosphere;