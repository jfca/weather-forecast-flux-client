import React, {useReducer} from "react";
import axios from 'axios';
import ForecastLocationContext from './forecastlocationContext';
import forecastlocationReducer from './forecastlocationReducer';
import {
    GET_CITY_INFO,
    CLEAR_CURRENT_LOCATION,
    SET_CURRENT_LOCATION,
    CURRENT_LOCATION_ERROR
} from "../types";

// @TODO To merge
// {
//     "city": "Toronto",
//     "admin": "Ontario",
//     "country": "Canada",
//     "population_proper": "3934421",
//     "iso2": "CA",
//     "capital": "admin",
//     "lat": "43.666667",
//     "lng": "-79.416667",
//     "population": "5213000"
// }
// currentLocation: {
//     cityID: 6094817,
//     cityName: 'Ottawa',
//     countryCode: 'CA'
//     lat: 12.34567,
//     lon: -12.45678
// }
// cities: {
//      Ottawa: {
//          id: 123456,
//          name: 'Ottawa',
//          country: 'CA',
//          lat: 12.34567,
//          lon: -12.45678
//      }
// }

const ForecastLocationState = props => {
    const initialState = {
        currentLocation: null,
        defaultLocation: {
            cityID: 6094817,
            cityName: 'Ottawa',
            countryCode: 'CA',
            lat: 45.116052,
            lon: -76.014273
        },
        cities: null,
        error: null
    };

    const [state, dispatch] = useReducer(forecastlocationReducer, initialState);

    //Add action functions here
    // GET_CITY_LIST_FROM_COUNTRY_CODE

    //GET_CITY_LIST_FROM_CITY_ID

    // GET_CITY_INFO
    const getCities = async (searchTerm) => {
        try {
            console.log(`searchTerm: ${searchTerm} (${typeof searchTerm})`);
            let url = null;
            if (typeof searchTerm === 'number') {
                url = `api/cities/id/${searchTerm}`;
            } else if (typeof searchTerm === 'string') {
                url = `api/cities/name/${searchTerm}`;
            } else {
                throw 'Search term is not a string or number'
            }
            const res = await axios.get(url);
            const cities_res = res.data.reduce((acc, cur) => (
                {
                    ...acc,
                    [cur.name]: {
                        id: cur.id,
                        name: cur.name,
                        country: cur.country,
                        lat: cur.coord.lat,
                        lon: cur.coord.lon
                    }
                }), {});
            console.log('cities_res');
            console.log(cities_res);
            dispatch({
                type: GET_CITY_INFO,
                payload: cities_res
            });
        } catch (e) {
            console.log(e.msg);
        }
    };

    // SET_CURRENT_LOCATION
    const setCurrentLocation = async (searchTerm) => {
        try {
            console.log(searchTerm);
            const res = await axios.get(
                `api/cities/city/name/${searchTerm}`
            );
            console.log(res.data);
            dispatch({
                type: SET_CURRENT_LOCATION,
                payload: {
                    cityID: res.data.id,
                    cityName: res.data.name,
                    countryCode: res.data.country,
                    lat: res.data.coord.lat,
                    lon: res.data.coord.lon
                }
            })
        } catch (err) {
            dispatch({
                type: CURRENT_LOCATION_ERROR,
                payload: err.message
            })
        }
    }

    // CLEAR_CURRENT_LOCATION

    return (
        <ForecastLocationContext.Provider
            value={{
                currentLocation: state.currentLocation,
                defaultLocation: state.defaultLocation,
                cities: state.cities,
                getCities,
                setCurrentLocation
            }}>
            {props.children}
        </ForecastLocationContext.Provider>
    )
};

export default ForecastLocationState;