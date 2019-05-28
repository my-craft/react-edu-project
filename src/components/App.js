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
        allCount: allCount
    };
};

const ConnectApp = ({ todoList, todoCount, allCount }) => {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    TODO list
                </p>
            </header>
            <div className="App-content">
                <Form />
                <ListState todo={ todoCount } all={ allCount } />
                <CheckedList list={ todoList }/>
            </div>
        </div>
    );
};

const App = connect(mapStateToProps)(ConnectApp);

export default App;