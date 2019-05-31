import {connect} from "react-redux";
import {setSort, setFilters} from "store";
import Filter from "../component/Filter";

const mapDispatchToProps = (dispatch) => (
  {
    setSort: sort => dispatch(setSort(sort)),
    setFilters: filters => dispatch(setFilters(filters))
  }
);

export default connect(null, mapDispatchToProps)(Filter);