import React, { useReducer } from "react";
// import axios from 'axios';
import ForecastContext from "./forecastContext";
import forecastReducer from "./forecastReducer";
import axios from "axios";
import {CURRENT_WEATHER_ERROR, FORECAST_ERROR, GET_5DAY_FORECAST, GET_CURRENT_WEATHER} from "../types";
// import {} from '../types';

const ForecastState = props => {
    const initialState = {
        forecasts: null,
        defaultForecasts: {
            "cod": "200",
            "message": 0,
            "cnt": 40,
            "list": [
                {
                    "dt": 1588280400,
                    "main": {
                        "temp": 286.07,
                        "feels_like": 281.69,
                        "temp_min": 286.07,
                        "temp_max": 286.77,
                        "pressure": 1008,
                        "sea_level": 1006,
                        "grnd_level": 997,
                        "humidity": 82,
                        "temp_kf": -0.7
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 6.29,
                        "deg": 129
                    },
                    "rain": {
                        "3h": 0.72
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-04-30 21:00:00"
                },
                {
                    "dt": 1588291200,
                    "main": {
                        "temp": 285.96,
                        "feels_like": 282.63,
                        "temp_min": 285.96,
                        "temp_max": 286.12,
                        "pressure": 1007,
                        "sea_level": 1006,
                        "grnd_level": 997,
                        "humidity": 87,
                        "temp_kf": -0.16
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 5.1,
                        "deg": 160
                    },
                    "rain": {
                        "3h": 1.79
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-05-01 00:00:00"
                },
                {
                    "dt": 1588302000,
                    "main": {
                        "temp": 285.81,
                        "feels_like": 284.17,
                        "temp_min": 285.81,
                        "temp_max": 285.84,
                        "pressure": 1007,
                        "sea_level": 1007,
                        "grnd_level": 998,
                        "humidity": 95,
                        "temp_kf": -0.03
                    },
                    "weather": [
                        {
                            "id": 501,
                            "main": "Rain",
                            "description": "moderate rain",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 3.17,
                        "deg": 158
                    },
                    "rain": {
                        "3h": 9.6
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2020-05-01 03:00:00"
                },
                {
                    "dt": 1588312800,
                    "main": {
                        "temp": 285.05,
                        "feels_like": 283.83,
                        "temp_min": 285.05,
                        "temp_max": 285.05,
                        "pressure": 1006,
                        "sea_level": 1006,
                        "grnd_level": 997,
                        "humidity": 95,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 501,
                            "main": "Rain",
                            "description": "moderate rain",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 2.26,
                        "deg": 162
                    },
                    "rain": {
                        "3h": 3.44
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2020-05-01 06:00:00"
                },
                {
                    "dt": 1588323600,
                    "main": {
                        "temp": 284.47,
                        "feels_like": 283.14,
                        "temp_min": 284.47,
                        "temp_max": 284.47,
                        "pressure": 1005,
                        "sea_level": 1005,
                        "grnd_level": 996,
                        "humidity": 95,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 2.18,
                        "deg": 77
                    },
                    "rain": {
                        "3h": 2.67
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2020-05-01 09:00:00"
                },
                {
                    "dt": 1588334400,
                    "main": {
                        "temp": 283.12,
                        "feels_like": 281.84,
                        "temp_min": 283.12,
                        "temp_max": 283.12,
                        "pressure": 1005,
                        "sea_level": 1005,
                        "grnd_level": 996,
                        "humidity": 95,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 1.6,
                        "deg": 30
                    },
                    "rain": {
                        "3h": 2.72
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-05-01 12:00:00"
                },
                {
                    "dt": 1588345200,
                    "main": {
                        "temp": 285.87,
                        "feels_like": 284.34,
                        "temp_min": 285.87,
                        "temp_max": 285.87,
                        "pressure": 1006,
                        "sea_level": 1006,
                        "grnd_level": 997,
                        "humidity": 87,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 98
                    },
                    "wind": {
                        "speed": 2.49,
                        "deg": 320
                    },
                    "rain": {
                        "3h": 0.98
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-05-01 15:00:00"
                },
                {
                    "dt": 1588356000,
                    "main": {
                        "temp": 288.46,
                        "feels_like": 284.97,
                        "temp_min": 288.46,
                        "temp_max": 288.46,
                        "pressure": 1006,
                        "sea_level": 1006,
                        "grnd_level": 997,
                        "humidity": 74,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 88
                    },
                    "wind": {
                        "speed": 5.33,
                        "deg": 325
                    },
                    "rain": {
                        "3h": 0.71
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-05-01 18:00:00"
                },
                {
                    "dt": 1588366800,
                    "main": {
                        "temp": 286.69,
                        "feels_like": 282.46,
                        "temp_min": 286.69,
                        "temp_max": 286.69,
                        "pressure": 1006,
                        "sea_level": 1006,
                        "grnd_level": 997,
                        "humidity": 68,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 95
                    },
                    "wind": {
                        "speed": 5.29,
                        "deg": 335
                    },
                    "rain": {
                        "3h": 0.26
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-05-01 21:00:00"
                },
                {
                    "dt": 1588377600,
                    "main": {
                        "temp": 282.45,
                        "feels_like": 278.36,
                        "temp_min": 282.45,
                        "temp_max": 282.45,
                        "pressure": 1008,
                        "sea_level": 1008,
                        "grnd_level": 1000,
                        "humidity": 70,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "broken clouds",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 55
                    },
                    "wind": {
                        "speed": 3.99,
                        "deg": 342
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-05-02 00:00:00"
                },
                {
                    "dt": 1588388400,
                    "main": {
                        "temp": 279.38,
                        "feels_like": 274.83,
                        "temp_min": 279.38,
                        "temp_max": 279.38,
                        "pressure": 1011,
                        "sea_level": 1011,
                        "grnd_level": 1002,
                        "humidity": 74,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01n"
                        }
                    ],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 4.1,
                        "deg": 334
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2020-05-02 03:00:00"
                },
                {
                    "dt": 1588399200,
                    "main": {
                        "temp": 277.08,
                        "feels_like": 273.02,
                        "temp_min": 277.08,
                        "temp_max": 277.08,
                        "pressure": 1013,
                        "sea_level": 1013,
                        "grnd_level": 1003,
                        "humidity": 79,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01n"
                        }
                    ],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 3.09,
                        "deg": 321
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2020-05-02 06:00:00"
                },
                {
                    "dt": 1588410000,
                    "main": {
                        "temp": 275.59,
                        "feels_like": 271.46,
                        "temp_min": 275.59,
                        "temp_max": 275.59,
                        "pressure": 1013,
                        "sea_level": 1013,
                        "grnd_level": 1004,
                        "humidity": 85,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01n"
                        }
                    ],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 3.1,
                        "deg": 311
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2020-05-02 09:00:00"
                },
                {
                    "dt": 1588420800,
                    "main": {
                        "temp": 279.02,
                        "feels_like": 274.91,
                        "temp_min": 279.02,
                        "temp_max": 279.02,
                        "pressure": 1015,
                        "sea_level": 1015,
                        "grnd_level": 1006,
                        "humidity": 74,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01d"
                        }
                    ],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 3.39,
                        "deg": 319
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-05-02 12:00:00"
                },
                {
                    "dt": 1588431600,
                    "main": {
                        "temp": 284.14,
                        "feels_like": 280.32,
                        "temp_min": 284.14,
                        "temp_max": 284.14,
                        "pressure": 1014,
                        "sea_level": 1014,
                        "grnd_level": 1005,
                        "humidity": 56,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01d"
                        }
                    ],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 3.2,
                        "deg": 320
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-05-02 15:00:00"
                },
                {
                    "dt": 1588442400,
                    "main": {
                        "temp": 287.81,
                        "feels_like": 284.16,
                        "temp_min": 287.81,
                        "temp_max": 287.81,
                        "pressure": 1012,
                        "sea_level": 1012,
                        "grnd_level": 1004,
                        "humidity": 51,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 802,
                            "main": "Clouds",
                            "description": "scattered clouds",
                            "icon": "03d"
                        }
                    ],
                    "clouds": {
                        "all": 32
                    },
                    "wind": {
                        "speed": 3.51,
                        "deg": 291
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-05-02 18:00:00"
                },
                {
                    "dt": 1588453200,
                    "main": {
                        "temp": 288.31,
                        "feels_like": 285.16,
                        "temp_min": 288.31,
                        "temp_max": 288.31,
                        "pressure": 1010,
                        "sea_level": 1010,
                        "grnd_level": 1001,
                        "humidity": 58,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "overcast clouds",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 3.48,
                        "deg": 276
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-05-02 21:00:00"
                },
                {
                    "dt": 1588464000,
                    "main": {
                        "temp": 284.34,
                        "feels_like": 282.48,
                        "temp_min": 284.34,
                        "temp_max": 284.34,
                        "pressure": 1010,
                        "sea_level": 1010,
                        "grnd_level": 1001,
                        "humidity": 73,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "overcast clouds",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 99
                    },
                    "wind": {
                        "speed": 1.51,
                        "deg": 204
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-05-03 00:00:00"
                },
                {
                    "dt": 1588474800,
                    "main": {
                        "temp": 281.81,
                        "feels_like": 279.47,
                        "temp_min": 281.81,
                        "temp_max": 281.81,
                        "pressure": 1010,
                        "sea_level": 1010,
                        "grnd_level": 1001,
                        "humidity": 91,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 802,
                            "main": "Clouds",
                            "description": "scattered clouds",
                            "icon": "03n"
                        }
                    ],
                    "clouds": {
                        "all": 28
                    },
                    "wind": {
                        "speed": 2.44,
                        "deg": 190
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2020-05-03 03:00:00"
                },
                {
                    "dt": 1588485600,
                    "main": {
                        "temp": 282.74,
                        "feels_like": 280.79,
                        "temp_min": 282.74,
                        "temp_max": 282.74,
                        "pressure": 1008,
                        "sea_level": 1008,
                        "grnd_level": 999,
                        "humidity": 89,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "broken clouds",
                            "icon": "04n"
                        }
                    ],
                    "clouds": {
                        "all": 61
                    },
                    "wind": {
                        "speed": 2.07,
                        "deg": 211
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2020-05-03 06:00:00"
                },
                {
                    "dt": 1588496400,
                    "main": {
                        "temp": 282.41,
                        "feels_like": 279.78,
                        "temp_min": 282.41,
                        "temp_max": 282.41,
                        "pressure": 1006,
                        "sea_level": 1006,
                        "grnd_level": 998,
                        "humidity": 84,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "overcast clouds",
                            "icon": "04n"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 2.66,
                        "deg": 200
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2020-05-03 09:00:00"
                },
                {
                    "dt": 1588507200,
                    "main": {
                        "temp": 282.9,
                        "feels_like": 280.11,
                        "temp_min": 282.9,
                        "temp_max": 282.9,
                        "pressure": 1005,
                        "sea_level": 1005,
                        "grnd_level": 997,
                        "humidity": 86,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "overcast clouds",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 93
                    },
                    "wind": {
                        "speed": 3.16,
                        "deg": 208
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-05-03 12:00:00"
                },
                {
                    "dt": 1588518000,
                    "main": {
                        "temp": 286.27,
                        "feels_like": 284.12,
                        "temp_min": 286.27,
                        "temp_max": 286.27,
                        "pressure": 1004,
                        "sea_level": 1004,
                        "grnd_level": 995,
                        "humidity": 80,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 95
                    },
                    "wind": {
                        "speed": 3.04,
                        "deg": 204
                    },
                    "rain": {
                        "3h": 0.27
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-05-03 15:00:00"
                },
                {
                    "dt": 1588528800,
                    "main": {
                        "temp": 289.64,
                        "feels_like": 287.63,
                        "temp_min": 289.64,
                        "temp_max": 289.64,
                        "pressure": 1001,
                        "sea_level": 1001,
                        "grnd_level": 992,
                        "humidity": 76,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 94
                    },
                    "wind": {
                        "speed": 3.87,
                        "deg": 181
                    },
                    "rain": {
                        "3h": 0.43
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-05-03 18:00:00"
                },
                {
                    "dt": 1588539600,
                    "main": {
                        "temp": 290.96,
                        "feels_like": 288.6,
                        "temp_min": 290.96,
                        "temp_max": 290.96,
                        "pressure": 998,
                        "sea_level": 998,
                        "grnd_level": 990,
                        "humidity": 72,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 30
                    },
                    "wind": {
                        "speed": 4.57,
                        "deg": 248
                    },
                    "rain": {
                        "3h": 2.63
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-05-03 21:00:00"
                },
                {
                    "dt": 1588550400,
                    "main": {
                        "temp": 286.63,
                        "feels_like": 283.66,
                        "temp_min": 286.63,
                        "temp_max": 286.63,
                        "pressure": 999,
                        "sea_level": 999,
                        "grnd_level": 990,
                        "humidity": 76,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 15
                    },
                    "wind": {
                        "speed": 4.05,
                        "deg": 264
                    },
                    "rain": {
                        "3h": 0.55
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-05-04 00:00:00"
                },
                {
                    "dt": 1588561200,
                    "main": {
                        "temp": 281.06,
                        "feels_like": 276.44,
                        "temp_min": 281.06,
                        "temp_max": 281.06,
                        "pressure": 1000,
                        "sea_level": 1000,
                        "grnd_level": 991,
                        "humidity": 75,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01n"
                        }
                    ],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 4.65,
                        "deg": 264
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2020-05-04 03:00:00"
                },
                {
                    "dt": 1588572000,
                    "main": {
                        "temp": 279.24,
                        "feels_like": 275.34,
                        "temp_min": 279.24,
                        "temp_max": 279.24,
                        "pressure": 1000,
                        "sea_level": 1000,
                        "grnd_level": 991,
                        "humidity": 81,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01n"
                        }
                    ],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 3.45,
                        "deg": 274
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2020-05-04 06:00:00"
                },
                {
                    "dt": 1588582800,
                    "main": {
                        "temp": 278.39,
                        "feels_like": 273.57,
                        "temp_min": 278.39,
                        "temp_max": 278.39,
                        "pressure": 1000,
                        "sea_level": 1000,
                        "grnd_level": 991,
                        "humidity": 80,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 802,
                            "main": "Clouds",
                            "description": "scattered clouds",
                            "icon": "03n"
                        }
                    ],
                    "clouds": {
                        "all": 32
                    },
                    "wind": {
                        "speed": 4.52,
                        "deg": 263
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2020-05-04 09:00:00"
                },
                {
                    "dt": 1588593600,
                    "main": {
                        "temp": 280.54,
                        "feels_like": 275.08,
                        "temp_min": 280.54,
                        "temp_max": 280.54,
                        "pressure": 1001,
                        "sea_level": 1001,
                        "grnd_level": 992,
                        "humidity": 78,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "broken clouds",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 53
                    },
                    "wind": {
                        "speed": 5.87,
                        "deg": 272
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-05-04 12:00:00"
                },
                {
                    "dt": 1588604400,
                    "main": {
                        "temp": 280.72,
                        "feels_like": 274.17,
                        "temp_min": 280.72,
                        "temp_max": 280.72,
                        "pressure": 1002,
                        "sea_level": 1002,
                        "grnd_level": 993,
                        "humidity": 71,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "overcast clouds",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 91
                    },
                    "wind": {
                        "speed": 7.12,
                        "deg": 292
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-05-04 15:00:00"
                },
                {
                    "dt": 1588615200,
                    "main": {
                        "temp": 283.02,
                        "feels_like": 276.37,
                        "temp_min": 283.02,
                        "temp_max": 283.02,
                        "pressure": 1003,
                        "sea_level": 1003,
                        "grnd_level": 994,
                        "humidity": 60,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "overcast clouds",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 89
                    },
                    "wind": {
                        "speed": 7.23,
                        "deg": 298
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-05-04 18:00:00"
                },
                {
                    "dt": 1588626000,
                    "main": {
                        "temp": 283.15,
                        "feels_like": 276.58,
                        "temp_min": 283.15,
                        "temp_max": 283.15,
                        "pressure": 1003,
                        "sea_level": 1003,
                        "grnd_level": 995,
                        "humidity": 58,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "overcast clouds",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 89
                    },
                    "wind": {
                        "speed": 7.02,
                        "deg": 303
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-05-04 21:00:00"
                },
                {
                    "dt": 1588636800,
                    "main": {
                        "temp": 279.38,
                        "feels_like": 273.7,
                        "temp_min": 279.38,
                        "temp_max": 279.38,
                        "pressure": 1005,
                        "sea_level": 1005,
                        "grnd_level": 997,
                        "humidity": 64,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "overcast clouds",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 85
                    },
                    "wind": {
                        "speed": 5.26,
                        "deg": 306
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-05-05 00:00:00"
                },
                {
                    "dt": 1588647600,
                    "main": {
                        "temp": 276.36,
                        "feels_like": 270.64,
                        "temp_min": 276.36,
                        "temp_max": 276.36,
                        "pressure": 1007,
                        "sea_level": 1007,
                        "grnd_level": 998,
                        "humidity": 75,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 802,
                            "main": "Clouds",
                            "description": "scattered clouds",
                            "icon": "03n"
                        }
                    ],
                    "clouds": {
                        "all": 41
                    },
                    "wind": {
                        "speed": 5.18,
                        "deg": 308
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2020-05-05 03:00:00"
                },
                {
                    "dt": 1588658400,
                    "main": {
                        "temp": 274.89,
                        "feels_like": 269.2,
                        "temp_min": 274.89,
                        "temp_max": 274.89,
                        "pressure": 1008,
                        "sea_level": 1008,
                        "grnd_level": 999,
                        "humidity": 82,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 802,
                            "main": "Clouds",
                            "description": "scattered clouds",
                            "icon": "03n"
                        }
                    ],
                    "clouds": {
                        "all": 46
                    },
                    "wind": {
                        "speed": 5.09,
                        "deg": 311
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2020-05-05 06:00:00"
                },
                {
                    "dt": 1588669200,
                    "main": {
                        "temp": 273.47,
                        "feels_like": 268.09,
                        "temp_min": 273.47,
                        "temp_max": 273.47,
                        "pressure": 1009,
                        "sea_level": 1009,
                        "grnd_level": 1000,
                        "humidity": 89,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "broken clouds",
                            "icon": "04n"
                        }
                    ],
                    "clouds": {
                        "all": 83
                    },
                    "wind": {
                        "speed": 4.6,
                        "deg": 315
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2020-05-05 09:00:00"
                },
                {
                    "dt": 1588680000,
                    "main": {
                        "temp": 274.81,
                        "feels_like": 268.42,
                        "temp_min": 274.81,
                        "temp_max": 274.81,
                        "pressure": 1011,
                        "sea_level": 1011,
                        "grnd_level": 1002,
                        "humidity": 79,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "broken clouds",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 68
                    },
                    "wind": {
                        "speed": 5.98,
                        "deg": 319
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-05-05 12:00:00"
                },
                {
                    "dt": 1588690800,
                    "main": {
                        "temp": 279.72,
                        "feels_like": 273.71,
                        "temp_min": 279.72,
                        "temp_max": 279.72,
                        "pressure": 1011,
                        "sea_level": 1011,
                        "grnd_level": 1002,
                        "humidity": 59,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 802,
                            "main": "Clouds",
                            "description": "scattered clouds",
                            "icon": "03d"
                        }
                    ],
                    "clouds": {
                        "all": 32
                    },
                    "wind": {
                        "speed": 5.57,
                        "deg": 320
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-05-05 15:00:00"
                },
                {
                    "dt": 1588701600,
                    "main": {
                        "temp": 284.7,
                        "feels_like": 278.84,
                        "temp_min": 284.7,
                        "temp_max": 284.7,
                        "pressure": 1011,
                        "sea_level": 1011,
                        "grnd_level": 1002,
                        "humidity": 48,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 802,
                            "main": "Clouds",
                            "description": "scattered clouds",
                            "icon": "03d"
                        }
                    ],
                    "clouds": {
                        "all": 33
                    },
                    "wind": {
                        "speed": 5.73,
                        "deg": 318
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-05-05 18:00:00"
                }
            ],
            "city": {
                "id": 6094817,
                "name": "Ottawa",
                "coord": {
                    "lat": 45.4112,
                    "lon": -75.6981
                },
                "country": "CA",
                "timezone": -14400,
                "sunrise": 1588240304,
                "sunset": 1588291676
            }
        },
        error: null,
        loading: true
    };

    const [state, dispatch] = useReducer(forecastReducer, initialState);

    // GET_5DAY_FORECAST,
    const getForecasts = async (id) => {
        try {
            const res = await axios.get(`/api/weather/5dayforecast/${id}`);

            dispatch({
                type: GET_5DAY_FORECAST,
                payload: res.data
            })
        } catch (err) {
            console.log(err);
            dispatch({
                type: FORECAST_ERROR,
                payload: err.response.msg
            })
        }
    }

    return (
        <ForecastContext.Provider
            value={{
                forecasts: state.forecasts,
                error: state.error,
                getForecasts
            }}>
            { props.children }
        </ForecastContext.Provider>
    )
}

export default ForecastState;