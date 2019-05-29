import React, { Component } from "react";
import styles from "./Form.module.css";

class Form extends Component {
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

export default Form;