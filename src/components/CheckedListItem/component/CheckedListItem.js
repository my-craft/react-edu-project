import React, {Component} from "react";
import styles from "./CheckedListItem.module.css";
import moment from "moment";

class CheckedListItem extends Component {

  constructor(props) {
    super(props);

    const {item} = this.props;

    this.state = {
      item
    }
  }

  onChangeHandler = () => {
    this.setState((prevState, props) => {
      const {item} = prevState;
      item.done = !item.done;

      props.setItemState(item);

      return item;
    });
  };

  render() {
    const {item} = this.state;

    return (
      <tr className={item.done ? styles.doneTask : ""}>
        <td><input type="checkbox" defaultChecked={item.done} onChange={this.onChangeHandler} /></td>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>{moment(item.date).format("DD.MM в HH:mm")}</td>
      </tr>
    );
  }
}

export default CheckedListItem;