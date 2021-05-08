import {
  LOGIN_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOG_OUT,
  LOGIN_FAIL,
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  user_id: null,
  isAuthenticated: false,
  userDetail: null,
  loading: true,
  allUsers: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      localStorage.setItem('id', payload.user.id);
      localStorage.setItem('userDetail', payload.user.name);
      return {
        ...state,
        token: payload.token,
        isAuthenticated: true,
        loading: false,
        user_id: payload.user.id,
        userDetail: payload.user,
      };
    //   case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOG_OUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: true,
        user_id: null,
        userDetail: null,
      };
    case USER_LOADED:
      return {
        ...state,
        userDetail: payload,
        isAuthenticated: true,
        loading: false,
      };
    default:
      return state;
  }
}
