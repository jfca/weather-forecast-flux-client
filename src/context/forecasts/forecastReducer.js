import {
    GET_5DAY_FORECAST,
    FORECAST_ERROR
} from '../types';

export default (state,action) => {
    switch (action.type) {
        case GET_5DAY_FORECAST:
            return state;
        case FORECAST_ERROR:
            return state;
        default:
            return state;
    }
}
