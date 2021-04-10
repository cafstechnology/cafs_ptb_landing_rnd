import {
    AUTH_SET,
    AUTH_CLEAR,
} from '../../constants/ActionTypes';

export const setAuth = (value) => {
    return {
        type: AUTH_SET,
        payload: value
    };
}
export const clearAuth = () => {
    return {
        type: AUTH_CLEAR
    };
}
