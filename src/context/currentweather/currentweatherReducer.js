import {
    CURRENT_WEATHER_ERROR,
    GET_CURRENT_WEATHER,
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_CURRENT_WEATHER:
            return {
                ...state,
                currentWeather: action.payload,
                loading: false
            };
        case CURRENT_WEATHER_ERROR:
            console.log(action.payload);
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}