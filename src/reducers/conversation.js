import {
    ADD_ROOM_COMPONENTS,
    SCHEDULE_COMPONENTS,
    GO_LIVE_COMPONENTS,
} from '../actions/types';

const initialState = {
    roomLink: null,
    loading: true,
    roomComponent: false,
    scheduleComponent: false,
    liveComponent: false,
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_ROOM_COMPONENTS:
            return {
                ...state,
                roomComponent: true,
                scheduleComponent: false,
                liveComponent: false,
            };
        case SCHEDULE_COMPONENTS:
            return {
                ...state,
                roomComponent: false,
                scheduleComponent: true,
                liveComponent: false,
            };
        case GO_LIVE_COMPONENTS:
            return {
                ...state,
                roomComponent: false,
                scheduleComponent: false,
                liveComponent: true,
            };
        default:
            return state;
    }
}