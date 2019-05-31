import React from "react";
import styles from "./Main.module.css";

const Main = () => (
  <div className={styles.links}>
    <h1>Список страниц</h1>
    <ul>
      <li><a href="/list">TODO list</a></li>
      <li><a href="/list/form">Добавить задачу</a></li>
    </ul>
  </div>
);

export default Main;