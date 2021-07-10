import {
  SET_NAVBAR_TOGGLE,
  ACTIVE_KEY,
  ACTIVE_SUB_CATEGORY,
  ACTIVE_TAB_CATEGORY,
  SHOW_NOTIFICATION,
  ACTIVE_SUB_SHOW_TIME,
  ACTIVE_SUB_CATEGORY_SIDEBAR,
  CHANGE_FORM_STEP,
  ACTIVE_COLLAPSE,
  ACTIVE_CHAT_BOX,
  ACTIVE_CHAT_TAB,
} from "../actions/types";

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
  showTimeSubItem: [
    {
      id: "host",
      subState: "Host Now",
      icon: "la la-play",
    },
    {
      id: "schedule",
      subState: "New Schedule",
      icon: "la la-plus",
    },
    {
      id: "calender",
      subState: "View Calender",
      icon: "la la-calendar",
    },
  ],
  showTimeActiveSubStates: {},
  categoryActiveSubStates: {},
  formStepState: {
    step1: true,
  },
  collapsableState: {
    step1: true,
  },
  chatBoxVisible: false,
  chatActiveTab: "",
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
      for (let key in state.sidebarStates) {
        state.sidebarStates[key] = false;
      }
      return {
        ...state,
        ...(state.sidebarStates[payload] = true),
      };
    case ACTIVE_SUB_CATEGORY:
      for (let key in state.subCategoryStates) {
        state.subCategoryStates[key] = false;
      }
      return {
        ...state,
        ...(state.subCategoryStates[payload] = true),
      };
    case ACTIVE_TAB_CATEGORY:
      for (let key in state.activeTabStates) {
        state.activeTabStates[key] = false;
      }
      return {
        ...state,
        ...(state.activeTabStates[payload] = true),
      };
    case SHOW_NOTIFICATION:
      return {
        ...state,
        notificationState: !state.notificationState,
      };
    case ACTIVE_SUB_SHOW_TIME:
      for (let key in state.showTimeActiveSubStates) {
        state.showTimeActiveSubStates[key] = false;
      }
      return {
        ...state,
        ...(state.showTimeActiveSubStates[payload] = true),
      };
    case ACTIVE_SUB_CATEGORY_SIDEBAR:
      for (let key in state.categoryActiveSubStates) {
        state.categoryActiveSubStates[key] = false;
      }
      return {
        ...state,
        ...(state.categoryActiveSubStates[payload] = true),
      };
    case CHANGE_FORM_STEP:
      for (let key in state.formStepState) {
        state.formStepState[key] = false;
      }
      return {
        ...state,
        ...(state.formStepState[payload] = true),
      };
    case ACTIVE_COLLAPSE:
      for (let key in state.collapsableState) {
        state.collapsableState[key] = false;
      }
      return {
        ...state,
        ...(state.collapsableState[payload] = true),
      };
    case ACTIVE_CHAT_BOX:
      return {
        ...state,
        chatBoxVisible: !state.chatBoxVisible
      }
    case ACTIVE_CHAT_TAB:
      return {
        ...state,
        chatActiveTab: payload
      }
    default:
      return state;
  }
}
