import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import cardReduser from "./Reduser/cardReduser";
import userReduser from "./Reduser/userReduser";

const reduser = combineReducers({
  cardReduser: cardReduser,
  userReduser: userReduser,
});

const store = createStore(reduser, applyMiddleware(thunk));

export default store;
