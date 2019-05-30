import {connect} from "react-redux";
import {setItemState} from "store";
import CheckedListItem from "../component/CheckedListItem";

const mapDispatchToProps = (dispatch) => ({setItemState: item => dispatch(setItemState(item))});

export default connect(null, mapDispatchToProps)(CheckedListItem);