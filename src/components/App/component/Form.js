import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../../../store/todoListStore/action";
import styles from "./App.module.css";

function mapDispatchToProps(dispatch) {
	return {
		addItem: item => dispatch(addItem(item))
	};
}

class ConnectedForm extends Component {
	state = {
		name: ""
	};

	onChangeHandler = (e) => {
		this.setState({ name: e.target.value });
	};

	onSubmitHandler = (e) => {
		e.preventDefault();

		const { name } = this.state;
		this.props.addItem({ name });

		this.setState({
			name: ""
		});
	};

	render() {
		const { name } = this.state;

		return (
			<div className={ styles["App-add-from"] }>
				<form onSubmit={ this.onSubmitHandler }>
					<input type="text" name="name" value={ name } onChange={ this.onChangeHandler } />
					<input type="submit" value="Добавить" />
				</form>
			</div>
		);
	}
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;