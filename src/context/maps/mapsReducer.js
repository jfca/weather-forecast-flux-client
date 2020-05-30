import {
    GET_CITY_MARKERS
} from "../types";

export default (state, action) => {
    console.log(action.type);
    console.log(action.payload);
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
