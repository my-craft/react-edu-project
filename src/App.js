import React, {Component} from 'react';
import './App.css';
import CheckedList from "./CheckedList";

class App extends Component {
    state = {
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

    render() {
        let { todoList } = this.state;

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
}

export default App;
