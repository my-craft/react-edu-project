import { createStore, applyMiddleware } from "redux";
import todoReducer from "./reducer";
import { taskFormValidation } from "./middleware";

const todoListStore = createStore(
  todoReducer,
  applyMiddleware(taskFormValidation)
);

export default todoListStore;