import React from "react";
import CheckedList from "../../CheckedList";
import Form from "../../Form";
import ListState from "../../ListState";
import styles from "./App.module.css";

const App = ({ todoList, todoCount, allCount, error }) => {
	return (
		<div className={ styles["App"] }>
			<header className={ styles["App-header"] }>
				<p>
					TODO list
				</p>
			</header>
			<div className={ styles["App-content"] }>
				<Form />
				{
          (error && error.length > 0) ? <p className={ styles["App-tasks-error"] }>{ error }</p> : ''
				}
				<ListState todo={ todoCount } all={ allCount } />
				<CheckedList list={ todoList } />
			</div>
		</div>
	);
};

export default App;