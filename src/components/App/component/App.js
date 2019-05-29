import React from "react";
import CheckedList from "../../CheckedList";
import Form from "../../Form";
import ListState from "../../ListState";
import styles from "./App.module.css";

const App = ({ todoList, todoCount, allCount, error }) => {
	return (
		<div>
			<header className={ styles["header"] }>
				<p>
					TODO list
				</p>
			</header>
			<div className={ styles["content"] }>
				<Form />
				{
          (error && error.length > 0) ? <p className={ styles["tasks-error"] }>{ error }</p> : ''
				}
				<ListState todo={ todoCount } all={ allCount } />
				<CheckedList list={ todoList } />
			</div>
		</div>
	);
};

export default App;