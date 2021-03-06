import todoReducer from "./todoList";
import {addItem, setItemState, setSort, setFilters} from "./todoList/action";
import {createStore} from "redux";

const todoList = createStore(
  todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default todoList;
export {addItem, setItemState, setSort, setFilters};
