import {connect} from "react-redux";
import {addItem} from "store";
import Form from "../component/Form";
import {getError} from "store/todoList/selectors";

const mapDispatchToProps = (dispatch) => ({addItem: item => dispatch(addItem(item))});

const mapStateToProps = (state) => ({error: getError(state)});

export default connect(mapStateToProps, mapDispatchToProps)(Form);