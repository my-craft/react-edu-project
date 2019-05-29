import { ADD_ITEM, FROM_ERROR } from "./constant";

export function taskFormValidation({ dispatch }) {
	return function (next) {
		return function (action) {
			if (action.type === ADD_ITEM) {
				if (action.payload.name.length < 1) {
					return dispatch({ type: FROM_ERROR });
				}
			}

			return next(action);
		}
	}
}