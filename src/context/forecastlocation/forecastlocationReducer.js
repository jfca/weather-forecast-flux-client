import {
    GET_CITY_INFO,
    CLEAR_CURRENT_LOCATION,
    SET_CURRENT_LOCATION,
    CURRENT_LOCATION_ERROR
} from "../types";

export default (state, action) => {
    switch (action.type) {
        case GET_CITY_INFO:
            return {
              ...state,
              cities: action.payload
            };
        case SET_CURRENT_LOCATION:
            console.log(action.payload);
            return {
                ...state,
                currentLocation: action.payload
            };
        case CLEAR_CURRENT_LOCATION:
            return {
                ...state,
                currentLocation: null
            }
        case CURRENT_LOCATION_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
};
