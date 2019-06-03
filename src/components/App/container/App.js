import {connect} from "react-redux";
import App from "../component/App";
import {getTodoList, getError, getSort, getFilters} from "store/todoList/selectors";
import {SORT_DEFAULT, SORT_DATE_ASC, SORT_DATE_DESC, FILTER_TODO, FILTER_DONE} from "store/todoList/constant";

const sortTypes = {
  [SORT_DEFAULT]: (a, b) => {

    if (!a.done && b.done) {
      return -1;
    }

    if (a.done && !b.done) {
      return 1;
    }

    return b.date.localeCompare(a.date);
  },

  [SORT_DATE_DESC]: (a, b) => {
    return b.date.localeCompare(a.date);
  },

  [SORT_DATE_ASC]: (a, b) => {
    return !b.date.localeCompare(a.date);
  }
};

const sortListByParam = (param) => {
  const sortTypeHandle = sortTypes[param];

  if (!sortTypeHandle) {
    return (a, b) => {};
  }

  return sortTypeHandle;
};

const mapStateToProps = (state) => {
  const todoList = getTodoList(state);

  /*const allCount = todoList.length;
  const todoCount = todoList.filter(
    (item) => {
      return !item.done;
    }
  ).length;

  const filters = getFilters(state);
  const filteredList = todoList.filter(
    (item) => {
      return ((filters[FILTER_TODO] === filters[FILTER_DONE])
        || (filters[FILTER_TODO] && !item.done)
        || (filters[FILTER_DONE] && item.done));
    }
  );

  const sort = getSort(state);

  // сделанные задачи должны быть внизу таблицы
  // между собой задачи с разными статусами отсортированы по дате - сначала новые
  filteredList.sort(sortListByParam(sort));*/

  return {
    todoList: todoList,
    todoCount: 0,
    allCount: 0,
    error: getError(state)
  };
};

export default connect(mapStateToProps)(App);