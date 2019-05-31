import React, {Component} from "react";
import styles from "./Form.module.css";
import Error from "components/Error";

import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button/Button";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: ""
    };
  }

  onChangeField = name => e => {
    if (name === "name") {
      this.setState({name: e.target.value});
    } else if (name === "description") {
      this.setState({description: e.target.value});
    }
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
                <TextField
                  label="Название"
                  value={name}
                  onChange={this.onChangeField('name')}
                  margin="normal"
                />
              </div>
              <div className={styles.row}>
                <TextField
                  label="Описание"
                  multiline
                  rows="4"
                  margin="normal"
                  value={description}
                  onChange={this.onChangeField('description')}
                />
              </div>
              <div className={styles.row}>
                <Button color="primary" variant="contained" type="submit">Добавить</Button>
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