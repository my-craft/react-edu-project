import React from "react";
import CheckedListItem from "../../CheckedListItem";
import styles from "./CheckedList.module.css";

const CheckedList = ({ list }) => {
	let sortedList = list;
	sortedList.sort((a, b) => {
		return ((!a.done && b.done) || !b.date.localeCompare(a.date)) ? -1 : 1;
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