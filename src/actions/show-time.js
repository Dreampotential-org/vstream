import {
    ADD_EVENT
} from './types'

export const addEvent = (title) => async (dispatch) => {
    try {

        dispatch({
            type: ADD_EVENT,
            payload: title
        });

    } catch (error) {

        console.log("eror....."+error);
    }
}