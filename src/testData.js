// import {buildWeatherIconURL, convertKelvinToCelsius, getWindDirection} from "./utils/helperFuncs";
//
// export const countries = {
//     "all": ["344", "348", "352"],
//     "byId": {
//         "344": {
//             "name": "Hong Kong Special Administrative Region",
//             "alpha-2": "HK",
//             "country-code": "344"
//         },
//         "348": {
//             "name": "Hungary",
//             "alpha-2": "HU",
//             "country-code": "348"
//         },
//         "352": {
//             "name": "Iceland",
//             "alpha-2": "IS",
//             "country-code": "352"
//         }
//     }
// };
//
// export const cities = {
//     "all": ["7533612", "1818833", "1818209"],
//     "byId": {
//         "7533612": {
//             "id": 7533612,
//             "name": "Kowloon City",
//             "country": "HK",
//             "coord": {
//                 "lon": 114.191208,
//                 "lat": 22.328659
//             }
//         },
//         "1818833": {
//             "id": 1818833,
//             "name": "Sheung Wan",
//             "country": "HK",
//             "coord": {
//                 "lon": 114.149597,
//                 "lat": 22.283831
//             }
//         },
//         "1818209": {
//             "id": 1818209,
//             "name": "Tsuen Wan",
//             "country": "HK",
//             "coord": {
//                 "lon": 114.099998,
//                 "lat": 22.366671
//             }
//         }
//     }
// };
//
// export const currentweather = {
//     avg_temp: convertKelvinToCelsius(293.7),
//     short_desc: "Clouds",
//     description: "scattered clouds",
//     humidity: 83,
//     winddegree: getWindDirection(40),
//     windspeed: 4.1,
//     iconurl: buildWeatherIconURL('03d', true)
// };
//
// export const empty_currentweather = {
//     avg_temp: "",
//     short_desc: "",
//     description: "",
//     humidity: "",
//     winddegree: "",
//     windspeed: "",
//     iconurl: ""
// };
//
// export const forecasts = [
//     {
//         id:1581584400,
//         datetime: "2020-02-13 09:00:00",
//         iconurl: buildWeatherIconURL('03d', false),
//         alt_desc: "scattered clouds",
//         min_temp: convertKelvinToCelsius(293.59),
//         max_temp: convertKelvinToCelsius(293.64)
//     },
//     {
//         id:1581566400,
//         datetime: "2020-02-13 12:00:00",
//         iconurl: buildWeatherIconURL('03n', false),
//         alt_desc: "scattered clouds",
//         min_temp: convertKelvinToCelsius(293.49),
//         max_temp: convertKelvinToCelsius(293.53)
//     },
//     {
//         id:1581642000,
//         datetime: "2020-02-14 09:00:00",
//         iconurl: buildWeatherIconURL('03n', false),
//         alt_desc: "scattered clouds",
//         min_temp: convertKelvinToCelsius(293.49),
//         max_temp: convertKelvinToCelsius(293.53)
//     },
//     {
//         id:1581652800,
//         datetime: "2020-02-14 12:00:00",
//         iconurl: buildWeatherIconURL('03n', false),
//         alt_desc: "scattered clouds",
//         min_temp: convertKelvinToCelsius(293.49),
//         max_temp: convertKelvinToCelsius(293.53)
//     },
//     {
//         id:1581663600,
//         datetime: "2020-02-14 15:00:00",
//         iconurl: buildWeatherIconURL('03n', false),
//         alt_desc: "scattered clouds",
//         min_temp: convertKelvinToCelsius(293.49),
//         max_temp: convertKelvinToCelsius(293.53)
//     }
// ];
//
// export const empty_forecasts = [
//     {
//         id:"",
//         datetime: "",
//         iconurl: "",
//         alt_desc: "",
//         min_temp: "",
//         max_temp: ""
//     }
// ];
