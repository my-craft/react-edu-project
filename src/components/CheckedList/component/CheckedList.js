import React from "react";
import CheckedListItem from "../../CheckedListItem";
import styles from "./CheckedList.module.css";

const CheckedList = ({ list }) => {
	return (
		list
			? <div className={ styles["App-list"] }>
				<ul>
					{
						list.map((listItem) => {
							return <CheckedListItem key={ listItem.id } item={ listItem } />;
						})
					}
				</ul>
			</div>
			: <div></div>
	);
};

export default CheckedList;