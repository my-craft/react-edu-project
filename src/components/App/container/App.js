import {connect} from "react-redux";
import App from "../component/App";
import {getTodoList, getError, getSort, getFilters} from "store/todoList/selectors";
import {SortTypes, FilterTypes} from "store/todoList/constant";

const sortTypes = {
  [SortTypes.SORT_DEFAULT]: (a, b) => {

    if (!a.done && b.done) {
      return -1;
    }

    if (a.done && !b.done) {
      return 1;
    }

    return b.date.localeCompare(a.date);
  },

  [SortTypes.SORT_DATE_DESC]: (a, b) => {
    return b.date.localeCompare(a.date);
  },

  [SortTypes.SORT_DATE_ASC]: (a, b) => {
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
  const todoListObj = getTodoList(state);

  const todoList = Object.keys(todoListObj).map(function (id) {
    return {...todoListObj[id], id};
  });

  const allCount = todoList.length;
  const todoCount = todoList.filter(
    (item) => {
      return !item.done;
    }
  ).length;

  const filters = getFilters(state);
  const filteredList = todoList.filter(
    (item) => {
      return ((filters[FilterTypes.FILTER_TODO] === filters[FilterTypes.FILTER_DONE])
        || (filters[FilterTypes.FILTER_TODO] && !item.done)
        || (filters[FilterTypes.FILTER_DONE] && item.done));
    }
  );

  const sort = getSort(state);

  // сделанные задачи должны быть внизу таблицы
  // между собой задачи с разными статусами отсортированы по дате - сначала новые
  filteredList.sort(sortListByParam(sort));

  return {
    todoList: filteredList,
    todoCount,
    allCount,
    error: getError(state)
  };
};

export default connect(mapStateToProps)(App);