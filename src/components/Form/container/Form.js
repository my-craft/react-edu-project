import { connect } from "react-redux";
import { addItem } from "../../../store";
import Form from "../component/Form";

function mapDispatchToProps(dispatch) {
	return {
		addItem: item => dispatch(addItem(item))
	};
}

export default connect(null, mapDispatchToProps)(Form);