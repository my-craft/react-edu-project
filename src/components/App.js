import React from "react";
import CheckedList from "./CheckedList";
import Form from "./Form";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        todoList: state.todoList
    };
};

const ConnectApp = ({ todoList }) => {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    TODO list
                </p>
            </header>
            <Form />
            <CheckedList list={ todoList }/>
        </div>
    );
}

const App = connect(mapStateToProps)(ConnectApp);

export default App;