import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import postFormation from "./postFormation";
import appReducer from "./appReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    postFormation,
    appReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);
