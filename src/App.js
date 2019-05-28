import React, {Component} from 'react';
import './App.css';
import CheckedList from "./CheckedList";
import store from './store';
import { addItem } from "./actions";

function App() {
    let { todoList } = store.getState();

    store.subscribe(() => console.log('Look ma, Redux!!'));

    let newTask = {
                        id: 3,
                        name: 'Third task so far'
                    };

    store.dispatch(addItem(newTask));

    ({ todoList } = store.getState());

    return (
        <div className="App">
            <header className="App-header">
                <p>
                TODO list
                </p>
            </header>
            <CheckedList list={ todoList }/>
        </div>
    );
}

export default App;
