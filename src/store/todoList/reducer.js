import {ADD_ITEM, SET_ITEM_STATE} from "./constant";
import moment from "moment";

const initialState = {
  todoList: [
    {
      id: 1,
      name: "First task",
      description: "Some text",
      date: "2019-05-28 16:05",
      done: false
    },
    {
      id: 2,
      name: "Second task",
      description: "",
      date: "2019-05-28 17:20",
      done: false
    }
  ],
  nextId: 3,
  error: null
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
      id: nextId,
      name: payload.name,
      description: payload.description ? payload.description : "",
      date: moment().format("YYYY-MM-DD HH:mm"),
      done: false
    };

    return {
      ...state,
      todoList: {...state.todoList, nextId: newItem},
      error: null,
      nextId: nextId + 1
    };
  },

  [SET_ITEM_STATE]: (state, payload) => {
    if (payload.id) {
      const {id, done} = payload;

      const {todoList} = state;

      todoList.map((item) => {
        if (item.id === id) {
          item.done = done;
        }

        return item;
      });

      return {...state, todoList};
    }

    return state;
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