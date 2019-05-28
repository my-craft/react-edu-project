import React from 'react';

function CheckedListItem(props) {
    let { item } = props;

    return (
                <li>
                    <input type="checkbox" />
                    <label>{ item.name }</label>
                </li>
            );
}

export default CheckedListItem;