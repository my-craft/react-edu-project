import {ADD_ITEM, SET_ITEM_STATE, SET_SORT, SET_FILTERS, SortTypes, FilterTypes} from "./constant";
import moment from "moment";

const initialState = {
  todoList: {
    1: {
      name: "First task",
      description: "Some text",
      date: "2019-05-28 16:05",
      done: false
    },
    2: {
      name: "Second task",
      description: "",
      date: "2019-05-28 17:20",
      done: false
    }
  },
  nextId: 3,
  error: null,
  sort: SortTypes.SORT_DEFAULT,
  filters: {
    [FilterTypes.FILTER_TODO]: false,
    [FilterTypes.FILTER_DONE]: false
  }
};

const getAddError = (payload) => {
  if (payload.name.length < 1) {
    return "Не введено название задачи";
  }
  return null;
};

const actions = {
  [ADD_ITEM]: (state, payload) => {
    const error = getAddError(payload);
    if (error) {
      return {
        ...state,
        error
      };
    }

    const {nextId} = state;

    const newItem = {
      name: payload.name,
      description: payload.description ? payload.description : "",
      date: moment().format("YYYY-MM-DD HH:mm"),
      done: false
    };

    return {
      ...state,
      todoList: {...state.todoList, [nextId]: newItem},
      error: null,
      nextId: nextId + 1
    };
  },

  [SET_ITEM_STATE]: (state, payload) => {
    if (!payload.id) {
      return state;
    }

    const {id, done} = payload;

    const {todoList} = state;

    if (!todoList[id]) {
      return state;
    }

    todoList[id].done = done;

    return {...state, todoList};
  },

  [SET_SORT]: (state, payload) => {
    const {sort} = payload;
    if (!sort) {
      return state;
    }

    return {...state, sort};
  },

  [SET_FILTERS]: (state, payload) => {
    const {filters} = payload;
    if (!filters) {
      return state;
    }

    return {...state, filters};
  }
};

const todoReducer = (state = initialState, action) => {
  const handler = actions[action.type];

  if (handler) {
    return handler(state, action.payload);
  }

  return state;
};

export default todoReducer;