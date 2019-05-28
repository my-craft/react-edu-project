import React, { Component } from "react";
import { connect } from "react-redux";
import { setItemState } from "../actions";

function mapDispatchToProps(dispatch) {
    return {
        setItemState: item => dispatch(setItemState(item))
    };
}

class ConnectCheckedListItem extends Component {

    constructor(props) {
        super(props);

        let { item } = this.props;

        this.state = {
            item: item
        }
    }

    onChangeHandler = () => {
        let newItemState = this.state.item;
        newItemState.done = !newItemState.done;

        this.setState({
            item: newItemState
        });

        this.props.setItemState({
            id: this.state.item.id,
            done: newItemState.done
        });
    };

    render() {
        let { item } = this.state;

        let labelClass = item.done ? "App-done-task" : "";

        return (
                    <li>
                        <input type="checkbox" defaultChecked={ item.done } onChange={ this.onChangeHandler } />
                        <label className={ labelClass }>{ item.name }</label>
                    </li>
                );
    }
};

const CheckedListItem = connect(null, mapDispatchToProps)(ConnectCheckedListItem);

export default CheckedListItem;