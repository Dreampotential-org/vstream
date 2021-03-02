import { combineReducers } from 'redux';
import auth from './auth';
import toggling from "./toggling";
import conversation from "./conversation";

export default combineReducers({
  auth,
  toggling,
  conversation,
});
