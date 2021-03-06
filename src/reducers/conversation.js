import {
    ADD_ROOM_COMPONENTS,
    SCHEDULE_COMPONENTS,
    GO_LIVE_COMPONENTS,
    SET_CATEGORIES,
    SET_WEBSOCKET_OBJECT,
} from '../actions/types';

const initialState = {
    roomLink: null,
    loading: true,
    categories: null,
    websocket: null,
    categoriesLoader: true,
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
        case SET_WEBSOCKET_OBJECT:
            return {
                ...state,
                websocket: payload,
            }
        case SET_CATEGORIES:
            return {
                ...state,
                categories: payload,
                categoriesLoader: false,
            }
        default:
            return state;
    }
}