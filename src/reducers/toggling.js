import {
  SET_NAVBAR_TOGGLE, ACTIVE_KEY, ACTIVE_HOME, ACTIVE_CATEGORY,
  ACTIVE_COMMUNITY, ACTIVE_SHOW_TIME, ACTIVE_PRIVACY,
  ACTIVE_GUIDELINES, ACTIVE_ABOUT, ACTIVE_SUPPORT
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
  }

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
      console.log("payload", payload)
      for (var key in state.sidebarStates) {
        state.sidebarStates[key] = false
      }
      return {
        ...state,
        ...state.sidebarStates[payload] = true
      }
    // case ACTIVE_HOME:
    //   for (var key in state.sidebarStates) {
    //     state.sidebarStates[key] = false
    //   }
    //   return {
    //     ...state,
    //     ...state.sidebarStates[payload] = true
    //   }
    default:
      return state;
  }
}
