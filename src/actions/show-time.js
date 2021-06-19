import { ADD_EVENT, ADD_AGENDA } from "./types";

export const addEvent = (title) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_EVENT,
      payload: title,
    });
  } catch (error) {
    console.log("eror....." + error);
  }
};

export const addAgenda = () => async (dispatch) => {
  try {
    dispatch({
      type: ADD_AGENDA,
    });
  } catch (error) {
    console.log("eror....." + error);
  }
};

export const agenda_input_field = (id, index) => async (dispatch) => {
    
}
