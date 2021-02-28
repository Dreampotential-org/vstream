import { SET_NAVBAR_TOGGLE } from '../actions/types';

const initialState = {
  toggleNavbarBurger: true,
};

export default function (state = initialState, action) {
  const { type } = action;

  switch (type) {
    case SET_NAVBAR_TOGGLE:
      return {
        ...state,
        toggleNavbarBurger: !state.toggleNavbarBurger,
      };
    default:
      return state;
  }
}
