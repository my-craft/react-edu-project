import React, {Component} from "react";
import {SORT_DEFAULT, SORT_DATE_ASC, SORT_DATE_DESC, FILTER_TODO, FILTER_DONE} from "store/todoList/constant";
import styles from "./Filter.module.css";

class Filter extends Component {
  state = {
    sort: SORT_DEFAULT,
    filters: {
      [FILTER_TODO]: false,
      [FILTER_DONE]: false
    }
  };

  onChangeSort = (e) => {
    const sort = e.target.value;

    this.setState({
        sort
      },
      () => {
        const {sort} = this.state;
        this.props.setSort({sort});
      });
  };

  onChangeFilter = (e) => {
    const {name, checked} = e.target;
    this.setState((prevState, props) => {
        const {filters} = prevState;
        filters[name] = checked;
        return filters;
      },
      () => {
        const {filters} = this.state;
        this.props.setFilters({filters});
      });
  };

  render() {
    const {sort, filters} = this.state;

    return (
      <div className={styles.filter}>
        <div className={styles.sort}>
          <label className={styles.selectLabel}>Сортировать задачи</label>
          <select onChange={this.onChangeSort} value={sort}>
            <option value={SORT_DEFAULT}>По умолчанию</option>
            <option value={SORT_DATE_DESC}>Сначала новые</option>
            <option value={SORT_DATE_ASC}>Сначала старые</option>
          </select>
        </div>
        <span>Показать</span>
        <div>
          <input name={FILTER_TODO} type="checkbox" onChange={this.onChangeFilter} value={FILTER_TODO}
                 checked={filters[FILTER_TODO]} /><label>Не сделанные</label>
        </div>
        <div>
          <input name={FILTER_DONE} type="checkbox" onChange={this.onChangeFilter} value={FILTER_DONE}
                 checked={filters[FILTER_DONE]} /><label>Сделанные</label>
        </div>
      </div>
    );
  }
}

export default Filter;