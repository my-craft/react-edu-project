import {ADD_ITEM, SET_ITEM_STATE} from "./constant";

export const addItem = (payload) => (
  {
    type: ADD_ITEM,
    payload
  }
);

export const setItemState = (payload) => (
  {
    type: SET_ITEM_STATE,
    payload
  }
);