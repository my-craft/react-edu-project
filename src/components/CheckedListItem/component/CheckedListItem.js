import React, { Component } from "react";
import styles from "./CheckedListItem.module.css";
import moment from "moment";

class CheckedListItem extends Component {

	constructor(props) {
		super(props);

		const { item } = this.props;

		this.state = {
			item
		}
	}

	onChangeHandler = () => {
		let { item } = this.state;
		item.done = !item.done;

		this.setState({ item });

		this.props.setItemState({
			id: this.state.item.id,
			done: item.done
		});
	};

	render() {
		const { item } = this.state;

		return (
			<tr className={ item.done ? styles["done-task"] : "" }>
				<td><input type="checkbox" defaultChecked={ item.done } onChange={ this.onChangeHandler } /></td>
        <td>{ item.name }</td>
        <td>{ item.description }</td>
        <td>{ moment(item.date).format("DD.MM в HH:mm") }</td>
			</tr>
		);
	}
}

export default CheckedListItem;