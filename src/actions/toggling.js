import {
    SET_NAVBAR_TOGGLE, ACTIVE_KEY, ACTIVE_SUB_CATEGORY, 
    ACTIVE_TAB_CATEGORY, SHOW_NOTIFICATION, ACTIVE_SUB_SHOW_TIME, 
    ACTIVE_SUB_CATEGORY_SIDEBAR, CHANGE_FORM_STEP
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

export const showNotification = () => async (dispatch) => {
    dispatch({
        type: SHOW_NOTIFICATION
    })
}

export const activeShowTimeSubstate = (key) => async (dispatch) => {
    dispatch({
        type: ACTIVE_SUB_SHOW_TIME,
        payload: key,
    })
}

export const activeCategorySubstate = (key) => async (dispatch) => {
    dispatch({
        type: ACTIVE_SUB_CATEGORY_SIDEBAR,
        payload: key,
    })
}

export const changeFormStep = (id) => async (dispatch) => {
    dispatch({
        type: CHANGE_FORM_STEP,
        payload: id,
    })
}