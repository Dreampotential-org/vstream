import {
    LOGIN_SUCCESS,
    API_ENDPOINT,
    USER_LOADED,
    AUTH_ERROR,
    LOG_OUT,
    LOGIN_FAIL,
} from './types';
import axios from 'axios';
import setAuthToken from '../utils/SetAuthToken';
import Noty from 'noty';

export const getCategories = () => async (dispatch) => {
    try {
        const res = await axios.get(`${API_ENDPOINT}/category/`);

        console.log('Get Categories Data: ', res.data);

        dispatch({
            type: GET_CATEGORIES,
            payload: res.data,
        });
    } catch (error) {
        console.log('Get Categories Data error: ', error);
        if (error.message !== 'Network Error') {
            console.log('Get Categories Data Error: ', error.response.status);
            if (error.response.status === 401) {
                dispatch({
                    type: AUTH_ERROR,
                });
            } else {
                new Noty({
                    type: 'error',
                    layout: 'bottomCenter',
                    text: error.response.data,
                    timeout: 300000,
                }).show();
            }
        } else {
            if (error.message === 'Network Error') {
                console.log('Get Categories Data Error: ', error.status);
                new Noty({
                    type: 'error',
                    layout: 'bottomCenter',
                    text: 'Server is not responding',
                    timeout: 300000,
                }).show();
            } else {
                console.log(
                    'Get Categories Data Error: ',
                    error.response.message
                );

                new Noty({
                    type: 'error',
                    layout: 'bottomCenter',
                    text: error.response.data,
                    timeout: 300000,
                }).show();
            }
        }

    }
};