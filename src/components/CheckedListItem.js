import React from "react";

const CheckedListItem = (props) => {
    let { item } = props;

    return (
                <li>
                    <input type="checkbox" />
                    <label>{ item.name }</label>
                </li>
            );
};

export default CheckedListItem;