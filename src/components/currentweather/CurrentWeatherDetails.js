import React, {useContext, useEffect, useState, Fragment} from 'react';
import CurrentTemp from "./CurrentTemp";
import SunriseSunset from "./SunriseSunset";
import CurrentWeatherContext from "../../context/currentweather/currentweatherContext";
import CurrentDate from "./CurrentDate";
import HighLowFeelsLike from "./HighLowFeelsLike";
import Atmosphere from "./Atmosphere";
import LocationContext from "../../context/location/locationContext";
import Spinner from "../layout/Spinner";

const CurrentWeatherDetails = () => {
    const currentweatherContext = useContext(CurrentWeatherContext);
    const { loading, currentWeather, getCurrentWeather } = currentweatherContext;
    const locationContext = useContext(LocationContext);
    const { currentLocation, defaultLocation, setCurrentLocation } = locationContext;

    // Set initial current location
    useEffect(() => {
        if (currentLocation === null) {
            setCurrentLocation([
                defaultLocation.location.coordinates[0], /* lon */
                defaultLocation.location.coordinates[1]  /* lat */
            ]);
            getCurrentWeather(defaultLocation.cityID);
        } else {
            getCurrentWeather(currentLocation.cityID);
        }
    }, [currentLocation]);

    return (
        <Fragment>
            {currentWeather !== null && !loading ? (
                <section className="weather-details grid-rows-5 grid-gap-1">
                    <div className="row row--jc-center row--ai-center">
                        <CurrentDate currentDate={currentWeather.dt}/>
                    </div>
                    <div className="row row--jc-center row--ai-center">
                        <HighLowFeelsLike
                            feelslikeVal={currentWeather.main.feels_like}
                            hightempVal={currentWeather.main.temp_max}
                            lowtempVal={currentWeather.main.temp_min}
                        />
                    </div>
                    <div className="row row--jc-center row--ai-center">
                        <CurrentTemp
                            avgTemp={currentWeather.main.temp}
                            weatherIcon={currentWeather.weather[0].icon}
                        />
                    </div>
                    <div className="row row--jc-around row--ai-center">
                        <Atmosphere currentweather={currentWeather}/>
                    </div>
                    <div className="row row--jc-around row--ai-center mb-1">
                        <SunriseSunset
                            sunriseTime={currentWeather.sys.sunrise}
                            sunsetTime={currentWeather.sys.sunset}
                        />
                    </div>
                </section>) : <Spinner/>
            }
        </Fragment>
    );
};

export default CurrentWeatherDetails;