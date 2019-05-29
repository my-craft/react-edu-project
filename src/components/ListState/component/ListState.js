import React from "react";
import styles from "./ListState.module.css";

const ListState = ({ todo, all }) => {
  let className = styles["tasks-state"];
  if (todo < 1) {
    className += " " + styles["done-all"];
  }

  return (
    <div className={ className }>
      <p>Осталось задач: { todo } из { all }</p>
    </div>
  );
};

export default ListState;