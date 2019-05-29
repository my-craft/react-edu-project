import { createStore } from "redux";
import todoReducer from "./reducer";

const todoListStore = createStore(
  todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default todoListStore;