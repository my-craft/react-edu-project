import React, { Component } from "react";
import styles from "./CheckedListItem.module.css";

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

		const labelClass = item.done ? styles["App-done-task"] : "";

		return (
			<li>
				<input type="checkbox" defaultChecked={ item.done } onChange={ this.onChangeHandler } />
				<label className={ labelClass }>{ item.name }</label>
			</li>
		);
	}
}

export default CheckedListItem;