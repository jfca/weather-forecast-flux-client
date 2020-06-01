import React, {useReducer} from "react";
import axios from 'axios';
import MapsContext from './mapsContext'; //@TODO context object capitalized
import mapsReducer from './mapsReducer'; //@TODO reducer object camel case
import {
    GET_CITY_MARKERS
} from "../types";

//@TODO add state object here
const MapsState = props => {
    const initialState = {
        cityMarkers: null,
        defaultCountryCode: 'CA',
        defaultCityName: 'Ottawa',
        defaultCityCode: 6094817,
        loading: true
    };

    const [state, dispatch] = useReducer(mapsReducer, initialState);

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
                query = `?lon=${lon}&lat=${lat}&distance=${distance}`;
                return `api/cities/area/${query}`;
            default:
                return null;
        }

    };

    //Add action functions here
    //GET_CITY_MARKERS
    const getCityMarkers = async (searchParam) => {
        try {
            const url = await getCurrentLocationInfo(searchParam);
            const res = await axios.get(url);
            const cities_res = res.data.reduce((acc, cur) => (
                {
                    ...acc,
                    [cur.name]: {
                        id: cur.id,
                        name: cur.name,
                        country: cur.country,
                        lat: cur.coord.lat,
                        lon: cur.coord.lon,
                        location: cur.location
                        //@TODO add other population, capitol city, prov. city, etc.
                    }
                }), {});
            dispatch({
                type: GET_CITY_MARKERS,
                payload: cities_res
            });
        } catch (e) {
            console.error(e.message);
        }
    };

    return (
        <MapsContext.Provider
            value={{
                cityMarkers: state.cityMarkers,
                getCityMarkers
            }}>
            {props.children}
        </MapsContext.Provider>
    )
};

export default MapsState;