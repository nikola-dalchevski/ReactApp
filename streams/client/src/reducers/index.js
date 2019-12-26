import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { reducer as form } from "redux-form";
import streamReducer from "./streamReducer";

export default combineReducers({
  form,
  auth: authReducer,
  streams: streamReducer
});
