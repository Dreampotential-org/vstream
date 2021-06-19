import { ADD_EVENT, ADD_AGENDA } from "../actions/types";

const initialState = {
  events: [],
  agenda: 1,
  agenda_list: [{'time':'', 'agenda':'', 'description':''}],
  live_event_title: "",
  live_event_tagline: "",
  live_event_description: "",
  event_basic_info: {'title':'', 'tagline':'', 'description':''}
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    case ADD_AGENDA:
      return {
        ...state,
        agenda: state.agenda + 1,
        agenda_list: [...state.agenda_list, {'time':'', 'agenda':'', 'description':''}]
      };

    default:
      return state;
  }
}
