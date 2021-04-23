import {
    SET_NAVBAR_TOGGLE, ACTIVE_KEY
} from './types';

export const toggleNavbar = () => async dispatch => {

    try {

        dispatch({
            type: SET_NAVBAR_TOGGLE
        });

    } catch (error) {

        console.log("eror....."+error);
    }
};

export const clickSidebarItems = (key) => async dispatch => {
    console.log("key..", key);
    dispatch({
        type: ACTIVE_KEY,
        payload: key,
    });
}