import { ADD_ITEM, SET_ITEM_STATE } from "../constants/action-types";

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
                ]
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
                todoList: state.todoList.concat(newItem)
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

        default:
            break;
    }

    return state;
}

export default rootReducer;