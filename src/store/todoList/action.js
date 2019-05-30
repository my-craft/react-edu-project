import {ADD_ITEM, SET_ITEM_STATE} from "./constant";

export function addItem(payload) {
  return {
    type: ADD_ITEM,
    payload
  }
}

export function setItemState(payload) {
  return {
    type: SET_ITEM_STATE,
    payload
  }
}