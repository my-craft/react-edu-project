import React from "react";
import CheckedList from "./CheckedList";
import Form from "./Form";
import { connect } from "react-redux";
import ListState from "./ListState";

const mapStateToProps = (state) => {
    let allCount = state.todoList.length;
    let todoCount = state.todoList.filter(
        (item) => {
            return !item.done;
        }
    ).length;

    return {
        todoList: state.todoList,
        todoCount: todoCount,
        allCount: allCount,
        isBadNameError: state.isBadNameError
    };
};

const ConnectApp = ({ todoList, todoCount, allCount, isBadNameError }) => {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    TODO list
                </p>
            </header>
            <div className="App-content">
                <Form />
                {
                    isBadNameError ? <p className="App-tasks-error">Название задачи не может быть пустым</p> : ''
                }
                <ListState todo={ todoCount } all={ allCount } />
                <CheckedList list={ todoList }/>
            </div>
        </div>
    );
};

const App = connect(mapStateToProps)(ConnectApp);

export default App;