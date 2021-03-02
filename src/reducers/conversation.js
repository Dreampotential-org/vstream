import {
    LOGIN_SUCCESS,
    USER_LOADED,
    AUTH_ERROR,
    LOG_OUT,
    LOGIN_FAIL,
  } from '../actions/types';
  
const initialState = {
    token: localStorage.getItem('token'),
    roomLink: null,
    loading: true,
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: payload.token,
                isAuthenticated: true,
                loading: false,
                user_id: payload.user.id,
            };
        default:
            return state;
    }
}