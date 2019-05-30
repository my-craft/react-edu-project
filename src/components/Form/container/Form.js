import {connect} from "react-redux";
import {addItem} from "store";
import Form from "../component/Form";

const mapDispatchToProps = (dispatch) => ({addItem: item => dispatch(addItem(item))});

export default connect(null, mapDispatchToProps)(Form);