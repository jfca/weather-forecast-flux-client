import React, { useContext } from 'react';
import CurrentTemp from "./CurrentTemp";
import SunriseSunset from "./SunriseSunset";
import CurrentWeatherContext from "../../context/currentweather/currentweatherContext";
import CurrentDate from "./CurrentDate";
import HighLowFeelsLike from "./HighLowFeelsLike";
import Atmosphere from "./Atmosphere";

const CurrentWeatherDetails = () => {
    const currentweatherContext = useContext(CurrentWeatherContext);
    const { currentweather } = currentweatherContext;

    return (
        <section id="current-weather-details">
            <div id="row-1">
                <CurrentDate currentDate={currentweather.dt}/>
            </div>
            <div id="row-2">
                <HighLowFeelsLike
                    feelslikeVal={currentweather.main.feels_like}
                    hightempVal={currentweather.main.temp_max}
                    lowtempVal={currentweather.main.temp_min}
                />
            </div>
            <div id="row-3">
                <CurrentTemp
                    avgTemp={currentweather.main.temp}
                    weatherIcon={currentweather.weather[0].icon}
                />
            </div>
            <div id="row-4">
                <Atmosphere currentweather={currentweather} />
            </div>
            <div id="row-5">
                <SunriseSunset
                    sunriseTime={currentweather.sys.sunrise}
                    sunsetTime={currentweather.sys.sunset}
                />
            </div>
        </section>
    );
};

export default CurrentWeatherDetails;