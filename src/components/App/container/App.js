import { connect } from "react-redux";
import App from "../component/App";
import { getTodoList, getError } from "../../../store/todoListStore/selectors";

const mapStateToProps = (state) => {
  const todoList = getTodoList(state);

	const allCount = todoList.length;
	const todoCount = todoList.filter(
		(item) => {
			return !item.done;
		}
	).length;

	return {
		todoList: todoList,
		todoCount: todoCount,
		allCount: allCount,
		error: getError(state)
	};
};

export default connect(mapStateToProps)(App);