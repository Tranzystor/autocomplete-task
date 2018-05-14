import { combineReducers } from "redux";
import {
  SEARCH_PHRASE_CHANGED,
  IS_FOCUSED_CHANGED,
  IS_NAVIGATED_CHANGED
} from "../actions/actionTypes";

const searchPhrase = (state = "", action) => {
  switch (action.type) {
    case SEARCH_PHRASE_CHANGED:
      return action.searchPhrase;
    default:
      return state;
  }
};

const focusedIndex = (state = 0, action) => {
  switch (action.type) {
    case IS_FOCUSED_CHANGED:
      return action.index;
    default:
      return state;
  }
};

const navigatedIndex = (state = null, action) => {
  switch (action.type) {
    case IS_NAVIGATED_CHANGED:
      return action.index;
    default:
      return state;
  }
};

const appRe = combineReducers({
  searchPhrase,
  focusedIndex,
  navigatedIndex
});
export default appRe;
