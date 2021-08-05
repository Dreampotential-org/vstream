import {
    SET_NAVBAR_TOGGLE, ACTIVE_KEY, ACTIVE_SUB_CATEGORY, 
    ACTIVE_TAB_CATEGORY, SHOW_NOTIFICATION, ACTIVE_SUB_SHOW_TIME, 
    ACTIVE_SUB_CATEGORY_SIDEBAR, CHANGE_FORM_STEP, ACTIVE_COLLAPSE, 
    ACTIVE_CHAT_BOX, ACTIVE_CHAT_TAB, ACTIVE_TAB_STREAMING,
    ACTIVE_VSTREAM_EVENT_NAVBAR
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

export const activeCollapsable = (id) => async (dispatch) => {
    dispatch({
        type: ACTIVE_COLLAPSE,
        payload: id,
    })
}

export const activeChatBox = () => async (dispatch) => {
    dispatch({
        type: ACTIVE_CHAT_BOX
    })
}

export const showParticipants = (key) => async (dispatch) => {
    dispatch({
        type: ACTIVE_CHAT_TAB,
        payload: key
    })
}

export const changeTabStreaming = (key) => async (dispatch) => {
    dispatch({
        type: ACTIVE_TAB_STREAMING,
        payload: key
    })
}

export const onClickEventNavbar = (id) => async (dispatch) => {
    dispatch({
        type: ACTIVE_VSTREAM_EVENT_NAVBAR,
        payload: id
    })
}