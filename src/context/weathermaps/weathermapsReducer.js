import {
    GET_CITY_MARKERS
} from "../types";

export default (state, action) => {
    switch (action.type) {
        case GET_CITY_MARKERS:
            return {
                ...state,
                cityMarkers: action.payload,
                loading:false
            }
        default:
            return state;
    }
};
