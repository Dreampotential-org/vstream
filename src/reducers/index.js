import { combineReducers } from 'redux';
import auth from './auth';
import toggling from "./toggling";
import conversation from "./conversation";
import show_time from "./show_time"

export default combineReducers({
  auth,
  toggling,
  conversation,
  show_time,
});
