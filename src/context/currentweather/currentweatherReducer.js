import {
    CURRENT_WEATHER_ERROR,
    GET_CURRENT_WEATHER,
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_CURRENT_WEATHER:
            return {
                ...state,
                currentweather: action.payload,
                loading: false
            };
        case CURRENT_WEATHER_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}