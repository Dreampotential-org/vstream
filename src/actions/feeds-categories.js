import {
    LOGIN_SUCCESS,
    API_ENDPOINT,
    WEBSOCKET_ENDPOINT,
    USER_LOADED,
    AUTH_ERROR,
    LOG_OUT,
    LOGIN_FAIL,
    SET_CATEGORIES,
    SET_WEBSOCKET_OBJECT,
    GET_CONFERENCE_URL,
} from './types';
import axios from 'axios';
import setAuthToken from '../utils/SetAuthToken';
import Noty from 'noty';

export const getCategories = () => async (dispatch) => {
    try {
        var socket = new WebSocket(WEBSOCKET_ENDPOINT+'/vstream/');
        socket.onopen = function open() {
            dispatch({
                type: SET_WEBSOCKET_OBJECT,
                payload: socket,
            })
            console.error("=====", 'WebSockets connection created.');
        };

        socket.onerror = function open(err) {
            console.error('=======', err);
            new Noty({
                type: 'error',
                layout: 'bottomCenter',
                text: "Connection Error..",
                timeout: 300000,
            }).show();
        };

        socket.onmessage = (event) => {
            var response_data = JSON.parse(event.data);
            dispatch({
                type: SET_CATEGORIES,
                payload: response_data.categories,
            })            
        }
    } catch (error) {
        console.log('Get Categories Data error: ', error);
        if (error.message !== 'Network Error') {
            console.log('Get Categories Data Error: ', error.response.status);
            if (error.response.status === 401) {
                console.log(error.response)
                // dispatch({
                //     type: AUTH_ERROR,
                // });
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

export const joinConference = (socket, category) => async (dispatch) => {
    try {
        var dict = {
            'action': 'join_category',
            'category': category,
        }
        socket.send(JSON.stringify(dict));
        return true;
        // socket.onmessage = (event) => {
        //     var response_data = JSON.parse(event.data);
        //     dispatch({
        //         type: SET_CATEGORIES,
        //         payload: response_data.categories,
        //     })          
        //     return true;
        // }
    } catch (error) {
        new Noty({
            type: 'error',
            layout: 'bottomCenter',
            text: error.message,
            timeout: 300000,
        }).show();
    }
}

