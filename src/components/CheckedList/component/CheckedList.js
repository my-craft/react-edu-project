import React from "react";
import CheckedListItem from "../../CheckedListItem";
import styles from "./CheckedList.module.css";

const CheckedList = ({ list }) => {
	let sortedList = list;

	// сделанные задачи должны быть внизу таблицы
  // между собой задачи с разными статусами отсортированы по дате - сначала новые
	sortedList.sort((a, b) => {
	  if (!a.done && b.done) {
      return -1;
    }

    if (a.done && !b.done) {
      return 1;
    }

    return b.date.localeCompare(a.date);
  });

	return (
		sortedList
			? <div className={ styles["list"] }>
				<table className={ styles["task-table"] }>
          <tbody>
            <tr>
              <th>&nbsp;</th>
              <th>Название</th>
              <th>Описание</th>
              <th>Дата постановки</th>
            </tr>
            {
              sortedList.map((listItem) => {
                return <CheckedListItem key={ listItem.id } item={ listItem } />;
              })
            }
					</tbody>
				</table>
			</div>
			: <div></div>
	);
};

export default CheckedList;