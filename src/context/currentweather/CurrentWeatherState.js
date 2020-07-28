import React, { useReducer } from "react";
import axios from 'axios';
import CurrentWeatherContext from "./currentweatherContext";
import CurrentWeatherReducer from "./currentweatherReducer";
import {
    GET_CURRENT_WEATHER,
    CURRENT_WEATHER_ERROR,
} from '../types';

const CurrentWeatherState = props => {
    const initialState = {
        loading: true,
        currentWeather: null,
        defaultCurrentWeather: {
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
        error: null
    };

    const [state, dispatch] = useReducer(CurrentWeatherReducer, initialState);

    // GET_CURRENT_WEATHER
    const getCurrentWeather = async (id) => {
        try {
            const res = await axios.get(`/api/weather/current/${id}`);

            dispatch({
                type: GET_CURRENT_WEATHER,
                payload: res.data
            })
        } catch (err) {
            console.log(err);
            dispatch({
                type: CURRENT_WEATHER_ERROR,
                payload: err.response.msg
            })
        }
    }

    return (
        <CurrentWeatherContext.Provider
            value={{
                currentWeather: state.currentWeather,
                error: state.error,
                getCurrentWeather,
            }}>
            { props.children }
        </CurrentWeatherContext.Provider>
    )
}

export default CurrentWeatherState;