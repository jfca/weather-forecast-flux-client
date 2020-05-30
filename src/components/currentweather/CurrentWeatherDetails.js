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
        <section className="weather-details grid-rows-5 grid-gap-1">
            <div className="row row--jc-center row--ai-center">
                <CurrentDate currentDate={currentweather.dt}/>
            </div>
            <div className="row row--jc-center row--ai-center">
                <HighLowFeelsLike
                    feelslikeVal={currentweather.main.feels_like}
                    hightempVal={currentweather.main.temp_max}
                    lowtempVal={currentweather.main.temp_min}
                />
            </div>
            <div className="row row--jc-center row--ai-center">
                <CurrentTemp
                    avgTemp={currentweather.main.temp}
                    weatherIcon={currentweather.weather[0].icon}
                />
            </div>
            <div className="row row--jc-around row--ai-center">
                <Atmosphere currentweather={currentweather}/>
            </div>
            <div className="row row--jc-around row--ai-center mb-1">
                <SunriseSunset
                    sunriseTime={currentweather.sys.sunrise}
                    sunsetTime={currentweather.sys.sunset}
                />
            </div>
        </section>
    );
};

export default CurrentWeatherDetails;