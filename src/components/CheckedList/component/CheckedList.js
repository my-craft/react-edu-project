import React from "react";
import CheckedListItem from "components/CheckedListItem";
import Filter from "components/Filter";
import styles from "./CheckedList.module.css";


const CheckedList = ({list}) => {
  if (!list) {
    return (<></>);
  }

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