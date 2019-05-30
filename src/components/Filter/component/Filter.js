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

  onSortChange = (e) => {
    const sort = e.target.value;

    this.props.addItem({sort});

    this.setState({
      sort
    });
  };

  render() {
    return (
      <div className={styles.filter}>
        <div className={styles.sort}>
          <label className={styles.selectLabel}>Сортировать задачи</label>
          <select onChange={this.onSortChange}>
            <option value={SORT_DEFAULT}>По умолчанию</option>
            <option value={SORT_DATE_DESC}>Сначала новые</option>
            <option value={SORT_DATE_DESC}>Сначала старые</option>
          </select>
        </div>
        <span>Показать</span>
        <div>
          <input type="checkbox" /><label>Сделанные</label>
        </div>
        <div>
          <input type="checkbox" /><label>Не сделанные</label>
        </div>
      </div>
    );
  }
}

export default Filter;