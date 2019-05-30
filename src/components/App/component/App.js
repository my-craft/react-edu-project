import React from "react";
import CheckedList from "components/CheckedList";
import Form from "components/Form";
import ListState from "components/ListState";
import styles from "./App.module.css";

const App = ({todoList, todoCount, allCount, error}) => {
  return (
    <div>
      <header className={styles.header}>
        <p>
          TODO list
        </p>
      </header>
      <div className={styles.content}>
        <Form />
        {error ? <p className={styles.tasksError}>{error}</p> : ''}
        <ListState todo={todoCount} all={allCount} />
        <CheckedList list={todoList} />
      </div>
    </div>
  );
};

export default App;