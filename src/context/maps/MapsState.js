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

    //Add action functions here
    //GET_CITY_MARKERS
    const getCityMarkers = async (countryCode) => {
        try {
            if (countryCode === undefined) {
                countryCode = `${state.defaultCountryCode}`;
                // name = state.defaultCityName;
                // name = state.defaultCountryCode;
                // name = 'a,a,a';
            }
            const res = await axios.get(`api/cities/countrycode/${countryCode}`);
            const cities_res = res.data.reduce((acc, cur) => (
                {
                    ...acc,
                    [cur.name]: {
                        id: cur.id,
                        name: cur.name,
                        country: cur.country,
                        lat: cur.coord.lat,
                        lon: cur.coord.lon
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