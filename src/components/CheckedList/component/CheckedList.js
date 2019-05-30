import React from "react";
import CheckedListItem from "components/CheckedListItem";
import Filter from "components/Filter";
import styles from "./CheckedList.module.css";

const CheckedList = ({list}) => {
  if (!list) {
    return (<></>);
  }

  // сделанные задачи должны быть внизу таблицы
  // между собой задачи с разными статусами отсортированы по дате - сначала новые
  list.sort((a, b) => {
    if (!a.done && b.done) {
      return -1;
    }

    if (a.done && !b.done) {
      return 1;
    }

    return b.date.localeCompare(a.date);
  });

  return (
    <div className={styles.list}>
      <Filter />
      <table className={styles.taskTable}>
        <tbody>
        <tr>
          <th>&nbsp;</th>
          <th>Название</th>
          <th>Описание</th>
          <th>Дата постановки</th>
        </tr>
        {list.map((listItem) => <CheckedListItem key={listItem.id} item={listItem} />)}
        </tbody>
      </table>
    </div>
  );
};

export default CheckedList;