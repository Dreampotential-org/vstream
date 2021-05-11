import {
    SET_NAVBAR_TOGGLE, ACTIVE_KEY, ACTIVE_SUB_CATEGORY, ACTIVE_TAB_CATEGORY
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

export const clickCategory = (key) => async (dispatch) => {
    dispatch({
        type: ACTIVE_SUB_CATEGORY,
        payload: key,
    });
}

export const changeTabOfCategory = (tab) => async (dispatch) => {
    dispatch({
        type: ACTIVE_TAB_CATEGORY,
        payload: tab,
    });
}