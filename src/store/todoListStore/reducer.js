import { ADD_ITEM, SET_ITEM_STATE, FROM_ERROR } from "./constant";

const initialState = {
	todoList: [
		{
			id: 1,
			name: 'First task',
			done: false
		},
		{
			id: 2,
			name: 'Second task',
			done: false
		}
	],
	isBadNameError: false
};

const actions = {
	[ADD_ITEM]: (state, payload) => {
		let newItem = payload;
		// вычислить новый id, если не задан
		// как максимальный +1
		if (!newItem.id) {
			newItem.id = Math.max(...state.todoList.map(obj => obj.id), 0) + 1;
		}

		newItem.done = false;

		return {
			...state,
			...{
				todoList: [...state.todoList, newItem],
				isBadNameError: false
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