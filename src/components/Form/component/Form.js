import React, {Component} from "react";
import styles from "./Form.module.css";
import Error from "components/Error";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: ""
    };
  }

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

  render() {
    const {name, description} = this.state;
    const {isOpened, error} = this.props;

    return (
      <>
        <div className={styles.form}>
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
        <Error error={error} />
      </>
    );
  }
}

export default Form;