import {
    ADD_EVENT,
} from '../actions/types';

const initialState = {
    events: []
}

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_EVENT:
            return {
                ...state,
                events: [...state.events, action.payload],
            };

        default:
            return state;
    }
}