import { createStore } from "redux";
import todoReducer from "./reducer";

const todoListStore = createStore(
  todoReducer
);

export default todoListStore;