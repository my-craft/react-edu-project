import { ADD_ITEM, SET_ITEM_STATE, BAD_NAME } from "../constants/action-types";

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

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            let newItem = action.payload;
            // вычислить новый id, если не задан
            // как максимальный +1
            if (!newItem.id) {
                newItem.id = Math.max(...state.todoList.map(obj => obj.id), 0) + 1;
            }

            newItem.done = false;

            return Object.assign({}, state, {
                todoList: state.todoList.concat(newItem),
                isBadNameError: false
            });

        case SET_ITEM_STATE:
            if (action.payload.id) {
                let itemId = action.payload.id;
                let done = action.payload.done;

                let { todoList } = state;

                todoList.map((item) => {
                    if (item.id === itemId) {
                        item.done = done;
                    }
                });

                return Object.assign({}, state, { todoList });
            }

            break;

        case BAD_NAME:
            return Object.assign({}, state, { isBadNameError: true });

        default:
            break;
    }

    return state;
}

export default rootReducer;