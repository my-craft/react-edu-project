import { ADD_ITEM, SET_ITEM_STATE, FROM_ERROR } from "./constant";
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
	error: ""
};

const actions = {
	[ADD_ITEM]: (state, payload) => {
		let error = "";

		if (payload.name.length < 1) {
			error = "Не введено название задачи";
		}

		if (error.length > 0) {
			return {
				...state,
				error
			};
		}

		let newItem = {
			id: 0,
			name: payload.name,
			description: payload.description ? payload.description : "",
      date: moment().format("YYYY-MM-DD HH:mm"),
			done: false
		};

		// вычислить новый id, если не задан
		// как максимальный +1
		if (!newItem.id) {
			newItem.id = Math.max(...state.todoList.map(obj => obj.id), 0) + 1;
		}

		return {
			...state,
			...{
				todoList: [...state.todoList, newItem],
				error: ""
			}
		};
	},

	[SET_ITEM_STATE]: (state, payload) => {
		if (payload.id) {
			const { id, done } = payload;

			let { todoList } = state;

			todoList.map((item) => {
				if (item.id === id) {
					item.done = done;
				}
			});

			return { ...state, todoList };
		}

		return state;
	},

	[FROM_ERROR]: (state) => {
		return { ...state, ...{ isBadNameError: true } };
	}
};

function todoReducer(state = initialState, action) {
	const handler = actions[action.type];

	if (handler) {
		return handler(state, action.payload);
	}

	return state;
}

export default todoReducer;