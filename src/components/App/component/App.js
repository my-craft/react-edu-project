import React, {Component} from "react";
import CheckedList from "components/CheckedList";
import Form from "components/Form";
import ListState from "components/ListState";
import styles from "./App.module.css";
import Header from "components/Header";
import Button from "@material-ui/core/Button";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false
    };
  }

  onShowFormClick = (e) => {
    this.setState((prevState, props) => ({isOpened: !prevState.isOpened}));
  };

  render() {
    const {todoList, todoCount, allCount} = this.props;
    const {isOpened} = this.state;

    return (
      <div>
        <Header title="TODO list" />
        <div className="content">
          <div>
            <Button variant="contained" onClick={this.onShowFormClick}>{isOpened ? "Скрыть форму" : "Добавить задачу"}</Button>
          </div>
          <Form isOpened={isOpened} />
          <ListState todo={todoCount} all={allCount} />
          <CheckedList list={todoList} />
        </div>
      </div>
    );
  }
}

export default App;