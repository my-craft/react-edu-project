import React from "react";
import styles from "./ListState.module.css";

const ListState = ({todo, all}) => {
  const className = styles.tasksState + ((todo < 1) ? " " + styles.doneAll : "");

  return (
    <div className={className}>
      <p>Осталось задач: {todo} из {all}</p>
    </div>
  );
};

export default ListState;