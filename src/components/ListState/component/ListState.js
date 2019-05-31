import React from "react";
import styles from "./ListState.module.css";

const ListState = ({todo, all}) => (
  <div className={`${styles.tasksState}${(todo < 1) ? ' ' + styles.doneAll : ''}`}>
    <p>Осталось задач: {todo} из {all}</p>
  </div>
);

export default ListState;