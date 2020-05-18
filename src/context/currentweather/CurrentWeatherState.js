import React, { useReducer } from "react";
// import axios from 'axios';
import CurrentWeatherContext from "./currentweatherContext";
import CurrentWeatherReducer from "./currentweatherReducer";
import {
    GET_CURRENT_WEATHER,
    CURRENT_WEATHER_ERROR,
} from '../types';

const CurrentWeatherState = props => {
    const initialState = {
        loading: true,
        currentweather: {
            "coord": {
                "lon": -75.7,
                "lat": 45.41
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "base": "stations",
            "main": {
                "temp": 285.4,
                "feels_like": 283.78,
                "temp_min": 284.26,
                "temp_max": 286.48,
                "pressure": 1009,
                "humidity": 84
            },
            "wind": {
                "speed": 2.24,
                "deg": 109,
                "gust": 5.81
            },
            "rain": {
                "1h": 0.51
            },
            "clouds": {
                "all": 100
            },
            "dt": 1588270031,
            "sys": {
                "type": 3,
                "id": 2005537,
                "country": "CA",
                "sunrise": 1588240305,
                "sunset": 1588291677
            },
            "timezone": -14400,
            "id": 6094817,
            "name": "Ottawa",
            "cod": 200
        },
        // theme: {
        //     locale: "en-CA",
        //     unitsOfMeasure: {
        //         temp: 'metric', // units metric, imperial. When you do not use units parameter, format is Standard by default.
        //     },
        //     intlDateOptions: {
        //         weekday: 'long',
        //         year: 'numeric',
        //         month: 'long',
        //         day: 'numeric',
        //         hour: 'numeric',
        //         minute: 'numeric',
        //         hour12: true,
        //         timeZone: 'America/Toronto',
        //         timeZoneName: 'short'
        //     },
        // },
        error: null
    };

    const [state, dispatch] = useReducer(CurrentWeatherReducer, initialState);

    // Action functions
    // GET_CURRENT_WEATHER
    // const getCurrentWeather = async (id) => {
    //     console.log('getCurrentWeather');
    //     try {
    //         console.log('before await axios.get');
    //         const res = await axios.get(`/api/weather/current/${state.cityID}`);
    //         console.log('after await axios.get');
    //         const rd = res.data;
    //         console.log('rd:');
    //         console.log(rd);
    //         const cw = {
    //             cityName: rd.name,
    //             countryCode: rd.sys.country,
    //             currentDate: rd.dt*1000,
    //             sunrise: rd.sys.sunrise*1000,
    //             sunset: rd.sys.sunset*1000,
    //             timeszone: rd.timezone*1000,
    //             weatherIcon: rd.weather[0].icon,
    //             weatherIconDesc: rd.weather[0].main,
    //             weatherDesc: rd.weather[0].description,
    //             avgTemp: rd.main.temp,
    //             feelsLike: rd.main.feels_like,
    //             hightempVal: rd.main.temp_max,
    //             lowtempVal: rd.main.temp_min,
    //             precipitation: rd.rain['1h'],
    //             maxWind: rd.wind.speed,
    //             windDeg: rd.wind.deg,
    //             humidity: rd.main.humidity,
    //             pressure: rd.main.pressure
    //         }
    //
    //         setLastLocation(cw.cityName, cw.countryCode);
    //
    //         dispatch({
    //             type: GET_CURRENT_WEATHER,
    //             payload: cw
    //         })
    //     } catch (err) {
    //         console.log(err);
    //         dispatch({
    //             type: CURRENT_WEATHER_ERROR,
    //             payload: err
    //             // payload: err.response.msg
    //         })
    //     }
    // }

    return (
        <CurrentWeatherContext.Provider
            value={{
                currentweather: state.currentweather,
                error: state.error,
                // getCurrentWeather,
            }}>
            { props.children }
        </CurrentWeatherContext.Provider>
    )
}

export default CurrentWeatherState;