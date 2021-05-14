import {
  SET_NAVBAR_TOGGLE, ACTIVE_KEY, ACTIVE_SUB_CATEGORY,
  ACTIVE_TAB_CATEGORY, SHOW_NOTIFICATION, ACTIVE_SUB_SHOW_TIME,
  ACTIVE_SUB_CATEGORY_SIDEBAR, CHANGE_FORM_STEP
} from '../actions/types';

const initialState = {
  toggleNavbarBurger: true,
  sidebarStates: {
    activeHome: true,
    activeCategory: false,
    activeShowTime: false,
    activeCommunity: false,
    activePrivacy: false,
    activeGuidelines: false,
    activeSupport: false,
    activeAbout: false,
  },
  subCategoryStates: {},
  activeTabStates: {
    live_now: true,
    trending: false,
    following: false,
    discover: false,
  },
  notificationState: false,
  showTimeSubItem : [
    {
      id: "host",
      subState: "Host Now",
      icon: "la la-play"
    },
    {
      id: "schedule",
      subState: "New Schedule",
      icon: "la la-plus"
    },
    {
      id: "calender",
      subState: "View Calender",
      icon: "la la-calendar"
    }
  ],
  showTimeActiveSubStates: {},
  categoryActiveSubStates: {},
  formStepState: {}

};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_NAVBAR_TOGGLE:
      return {
        ...state,
        toggleNavbarBurger: !state.toggleNavbarBurger,
      };
    case ACTIVE_KEY:
      for (var key in state.sidebarStates) {
        state.sidebarStates[key] = false
      }
      return {
        ...state,
        ...state.sidebarStates[payload] = true
      }
    case ACTIVE_SUB_CATEGORY:
      for (var key in state.subCategoryStates) {
        state.subCategoryStates[key] = false
      }
      return {
        ...state,
        ...state.subCategoryStates[payload] = true
      }
    case ACTIVE_TAB_CATEGORY:
      for (var key in state.activeTabStates) {
        state.activeTabStates[key] = false
      }
      return {
        ...state,
        ...state.activeTabStates[payload] = true
      }
    case SHOW_NOTIFICATION:
      return {
        ...state,
        notificationState: !state.notificationState
      }
    case ACTIVE_SUB_SHOW_TIME:
      for (var key in state.showTimeActiveSubStates) {
        state.showTimeActiveSubStates[key] = false
      }
      return {
        ...state,
        ...state.showTimeActiveSubStates[payload] = true
      }
    case ACTIVE_SUB_CATEGORY_SIDEBAR:
      for (var key in state.categoryActiveSubStates) {
        state.categoryActiveSubStates[key] = false
      }
      return {
        ...state,
        ...state.categoryActiveSubStates[payload] = true
      }
    case CHANGE_FORM_STEP:
      for (var key in state.formStepState) {
        state.formStepState[key] = false
      }
      return {
        ...state,
        ...state.formStepState[payload] = true
      }
    default:
      return state;
  }
}
