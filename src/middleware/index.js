import { ADD_ITEM, BAD_NAME } from "../constants/action-types";

export function checkTaskName({ dispatch }) {
    return function (next) {
        return function (action) {
            if (action.type === ADD_ITEM) {
                if (action.payload.name.length < 1) {
                    return dispatch({ type: BAD_NAME });
                }
            }

            return next(action);
        }
    }
}