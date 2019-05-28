import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import { checkTaskName } from "../middleware";

const store = createStore(
    rootReducer,
    applyMiddleware(checkTaskName)
);

export default store;