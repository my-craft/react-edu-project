import React from "react";
import { connect } from "react-redux";
import CheckedList from "./CheckedList";
import Form from "./Form";
import ListState from "./ListState";
import styles from "./App.module.css";

const mapStateToProps = (state) => {
	const allCount = state.todoList.length;
	const todoCount = state.todoList.filter(
		(item) => {
			return !item.done;
		}
	).length;

	return {
		todoList: state.todoList,
		todoCount: todoCount,
		allCount: allCount,
		isBadNameError: state.isBadNameError
	};
};

const ConnectApp = ({ todoList, todoCount, allCount, isBadNameError }) => {
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
					isBadNameError ? <p className={ styles["App-tasks-error"] }>Название задачи не может быть пустым</p> : ''
				}
				<ListState todo={ todoCount } all={ allCount } />
				<CheckedList list={ todoList } />
			</div>
		</div>
	);
};

const App = connect(mapStateToProps)(ConnectApp);

export default App;