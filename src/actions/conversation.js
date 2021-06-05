import {
    LOGIN_SUCCESS,
    API_ENDPOINT,
    USER_LOADED,
    AUTH_ERROR,
    LOG_OUT,
    LOGIN_FAIL,
    CREATE_ROOM,
    ADD_ROOM_COMPONENTS,
    SCHEDULE_COMPONENTS,
    GO_LIVE_COMPONENTS,
} from './types';
import axios from 'axios';
import setAuthToken from '../utils/SetAuthToken';
import Noty from 'noty';

export const createRoom = (roomData) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    };

    const body = roomData;
    try {
        const res = await axios.post(`${API_ENDPOINT}/s3_uploader/user/login`, body, config);

        console.log('Create Room Response', res.data);
        // if (res.data.access_token !== 'undefined') {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        });
        //}

        return true;

        // console.log(res.data.Token);

        //dispatch(loadUser());
    } catch (err) {
        // const errors = err.response.data.errors;

        console.log('Login Error: ', err);

        // if (errors) {
        //   errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        // }

        dispatch({
            type: LOGIN_FAIL,
        });

        new Noty({
            type: 'error',
            layout: 'bottomCenter',
            text: err.response.data,
            timeout: 300000,
        }).show();

        return true;
    }
};

export const getAllUsers = (roomData) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    };

    const body = roomData;
    try {
        const res = await axios.post(`${API_ENDPOINT}/s3_uploader/user/login`, body, config);

        console.log('Create Room Response', res.data);
        // if (res.data.access_token !== 'undefined') {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        });
        //}

        return true;

        // console.log(res.data.Token);

        //dispatch(loadUser());
    } catch (err) {
        // const errors = err.response.data.errors;

        console.log('Login Error: ', err);

        // if (errors) {
        //   errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        // }

        dispatch({
            type: LOGIN_FAIL,
        });

        new Noty({
            type: 'error',
            layout: 'bottomCenter',
            text: err.response.data,
            timeout: 300000,
        }).show();

        return true;
    }
};


export const changeComponents = (componentId) => async (dispatch) => {
    if (componentId == "addRoom") {
        dispatch({
            type: ADD_ROOM_COMPONENTS,
        });
    } else if (componentId == "schedule") {
        dispatch({
            type: SCHEDULE_COMPONENTS,
        });

    } else if (componentId == "live") {
        dispatch({
            type: GO_LIVE_COMPONENTS,
        });
    }
}