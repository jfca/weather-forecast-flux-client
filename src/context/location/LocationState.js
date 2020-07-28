import React, {useReducer} from "react";
import axios from 'axios';
import LocationContext from './locationContext';
import forecastlocationReducer from './locationReducer';
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

const LocationState = props => {
    const initialState = {
        currentLocation: null,
        defaultLocation: {
            cityID: 6094817,
            cityName: 'Ottawa',
            countryCode: 'CA',
            lat: 45.411171, /* depricated */
            lon: -75.69812, /* depricated */
            location: {
                type: 'Point',
                coordinates: [ -75.69812, 45.411171 ]
            }
        },
        cities: null,
        error: null,
        loading: true
    };

    const [state, dispatch] = useReducer(forecastlocationReducer, initialState);

    //Add action functions here
    // GET_CITY_LIST_FROM_COUNTRY_CODE

    //GET_CITY_LIST_FROM_CITY_ID

    // GET_CITY_INFO
    const getCities = async (searchTerm) => {
        try {
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
            dispatch({
                type: GET_CITY_INFO,
                payload: cities_res
            });
        } catch (e) {
            console.log(e.msg);
        }
    };

    const getCurrentLocationInfo = async (searchTerm) => {
        let query = null;
        const distance = 50;
        switch (typeof searchTerm) {
            case "string":
                const [ city, country ] = searchTerm.split(',');
                query = `?city=${city}&country=${country}`;
                return `api/cities/city/name/${query}`;
            case "number":
                return `api/cities/city/id/${searchTerm}`;
            case "object":
                const { lon, lat } = searchTerm;
                query = `?lon=${lon}&lat=${lat}`;
                return `api/cities/location/${query}`;
            default:
                return null;
        }

    };

    // SET_CURRENT_LOCATION
    const setCurrentLocation = async (searchTerm) => {
        try {
            const url = await getCurrentLocationInfo(searchTerm);
            const res = await axios.get(url);
            dispatch({
                type: SET_CURRENT_LOCATION,
                payload: {
                    cityID: res.data.id,
                    cityName: res.data.name,
                    countryCode: res.data.country,
                    location: res.data.location
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
        <LocationContext.Provider
            value={{
                currentLocation: state.currentLocation,
                defaultLocation: state.defaultLocation,
                cities: state.cities,
                error: state.error,
                loading: state.loading,
                getCities,
                setCurrentLocation
            }}>
            {props.children}
        </LocationContext.Provider>
    )
};

export default LocationState;