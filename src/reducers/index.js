import { ADD_ITEM } from "../constants/action-types";

const initialState = {
    todoList: [
                    {
                        id: 1,
                        name: 'First task'
                    },
                    {
                        id: 2,
                        name: 'Second task'
                    }
                ]
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            return Object.assign({}, state, {
                todoList: state.todoList.concat(action.payload)
            });
        default:
            break;
    }

    return state;
}

export default rootReducer;