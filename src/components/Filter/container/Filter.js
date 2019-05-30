import {connect} from "react-redux";
import {setSort, setFilters} from "store";
import Filter from "../component/Filter";

const mapDispatchToProps = (dispatch) => (
  {
    setSort: item => dispatch(setSort(item)),
    setFilters: item => dispatch(setFilters(item))
  }
);

export default connect(null, mapDispatchToProps)(Filter);