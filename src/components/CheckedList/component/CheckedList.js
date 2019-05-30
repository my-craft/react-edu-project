import React from "react";
import CheckedListItem from "components/CheckedListItem";
import styles from "./CheckedList.module.css";

const CheckedList = ({list}) => {
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

  if (!list) {
    return (<></>);
  }

  return (
    <div className={styles.list}>
      <div className={styles.filter}>
        <div>
          <label className={styles.selectLabel}>Сортировать задачи</label>
          <select>
            <option>По умолчанию</option>
            <option>Сначала новые</option>
            <option>Сначала старые</option>
          </select>
        </div>
        <div>
          <input type="checkbox" /><label>Сделанные</label>
        </div>
        <div>
          <input type="checkbox" /><label>Не сделанные</label>
        </div>
      </div>
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