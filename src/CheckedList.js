import React from "react";
import CheckedListItem from './CheckedListItem';

function CheckedList(props) {
    let { list } = props;
    return (
                list
                ? <div className="App-list">
                    <ul>
                        {
                            list.map((listItem) => {
                                return <CheckedListItem key={ listItem.id } item={ listItem }/>;
                            })
                        }
                    </ul>
                </div>
                : null
            );
}

export default CheckedList;