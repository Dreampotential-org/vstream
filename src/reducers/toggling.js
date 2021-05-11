import {
  SET_NAVBAR_TOGGLE, ACTIVE_KEY, ACTIVE_SUB_CATEGORY, ACTIVE_TAB_CATEGORY
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
      // state.subCategoryStates[payload] = true
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
    default:
      return state;
  }
}
