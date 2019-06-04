import React, {Component} from "react";
import {SortTypes, FilterTypes} from "store/todoList/constant";
import styles from "./Filter.module.css";

class Filter extends Component {
  state = {
    sort: SortTypes.SORT_DEFAULT,
    filters: {
      [FilterTypes.FILTER_TODO]: false,
      [FilterTypes.FILTER_DONE]: false
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
            <option value={SortTypes.SORT_DEFAULT}>По умолчанию</option>
            <option value={SortTypes.SORT_DATE_DESC}>Сначала новые</option>
            <option value={SortTypes.SORT_DATE_ASC}>Сначала старые</option>
          </select>
        </div>
        <span>Показать</span>
        <div>
          <input name={FilterTypes.FILTER_TODO}
                 type="checkbox"
                 onChange={this.onChangeFilter}
                 value={FilterTypes.FILTER_TODO}
                 checked={filters[FilterTypes.FILTER_TODO]} />
          <label>Не сделанные</label>
        </div>
        <div>
          <input name={FilterTypes.FILTER_DONE}
                 type="checkbox"
                 onChange={this.onChangeFilter}
                 value={FilterTypes.FILTER_DONE}
                 checked={filters[FilterTypes.FILTER_DONE]} />
          <label>Сделанные</label>
        </div>
      </div>
    );
  }
}

export default Filter;