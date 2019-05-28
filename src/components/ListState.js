import React from "react";

const ListState = (props) => {
    let className = "App-tasks-state";
    if (props.todo < 1) {
        className += " App-done-all";
    }

    return (
        <div className={ className }>
            <p>Осталось задач: { props.todo } из { props.all }</p>
        </div>
    );
};

export default ListState;