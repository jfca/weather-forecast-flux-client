import {
    GET_5DAY_FORECAST,
    FORECAST_ERROR
} from '../types';

export default (state,action) => {
    switch (action.type) {
        case GET_5DAY_FORECAST:
            return {
                ...state,
                forecasts: action.payload,
                loading: false
            };
        case FORECAST_ERROR:
            console.log(action.payload);
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}
