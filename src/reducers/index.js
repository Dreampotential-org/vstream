import { combineReducers } from 'redux';
import auth from './auth';
import toggling from "./toggling";

export default combineReducers({
  auth,
  toggling,
});
