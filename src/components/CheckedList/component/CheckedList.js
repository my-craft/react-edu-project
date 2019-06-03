import React from "react";
import CheckedListItem from "components/CheckedListItem";
import Filter from "components/Filter";
import styles from "./CheckedList.module.css";


const CheckedList = ({list}) => {
  if (!list) {
    return (<></>);
  }

  const items = [];
  for (const [id, listItem] of Object.entries(list)) {
    items.push(<CheckedListItem key={id} item={listItem} />);
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
        {items}
        </tbody>
      </table>
    </div>
  );
};

export default CheckedList;