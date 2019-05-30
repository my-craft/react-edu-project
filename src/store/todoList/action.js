import {ADD_ITEM, SET_ITEM_STATE, SET_SORT, SET_FILTERS} from "./constant";

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

export const setSort = (payload) => (
  {
    type: SET_SORT,
    payload
  }
);

export const setFilters = (payload) => (
  {
    type: SET_FILTERS,
    payload
  }
);