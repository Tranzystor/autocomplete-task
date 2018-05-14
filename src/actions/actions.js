import {
  SEARCH_PHRASE_CHANGED,
  IS_FOCUSED_CHANGED,
  IS_NAVIGATED_CHANGED
} from "./actionTypes";

export const changeSearchPhrase = searchPhrase => {
  return {
    type: SEARCH_PHRASE_CHANGED,
    searchPhrase
  };
};

export const changeFocused = index => {
  return {
    type: IS_FOCUSED_CHANGED,
    index
  };
};

export const changeNavigated = index => {
  return {
    type: IS_NAVIGATED_CHANGED,
    index
  };
};
