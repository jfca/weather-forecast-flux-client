import {
    GET_APP_TITLE,
    GET_APP_VERSION
} from "../types";

export default (state, action) => {
    switch (action.type) {
        case GET_APP_VERSION:
            return {
                ...state,
                appVersion: action.payload
            }
        default:
            return state;
    }
};
