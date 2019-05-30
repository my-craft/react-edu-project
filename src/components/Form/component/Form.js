import React, {Component} from "react";
import styles from "./Form.module.css";

class Form extends Component {
  state = {
    name: "",
    description: "",
    isOpened: false
  };

  onChangeName = (e) => {
    this.setState({name: e.target.value});
  };

  onChangeDescription = (e) => {
    this.setState({description: e.target.value});
  };

  onSubmitForm = (e) => {
    e.preventDefault();

    const {name, description} = this.state;
    this.props.addItem({name, description});

    this.setState({
      name: "",
      description: ""
    });
  };

  onShowFormClick = (e) => {
    this.setState({isOpened: true});
  };

  onHideFormClick = (e) => {
    this.setState({isOpened: false});
  };

  render() {
    const {name, description, isOpened} = this.state;

    return (
      <div className={styles.from}>
        <div>
          {isOpened ? <button onClick={this.onHideFormClick}>Скрыть форму</button> : <button onClick={this.onShowFormClick}>Добавить задачу</button>}
        </div>
        <div className={(!isOpened ? styles.hide : styles.show)}>
          <form onSubmit={this.onSubmitForm}>
            <div className={styles.row}>
              <label>Название: </label>
              <input type="text" name="name" value={name} onChange={this.onChangeName} />
            </div>
            <div className={styles.row}>
              <label>Описание: </label>
              <textarea name="description" value={description} onChange={this.onChangeDescription} />
            </div>
            <div className={styles.row}>
              <input type="submit" value="Добавить" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;