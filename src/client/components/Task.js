import React from "react";
function Task(props) {
    return (
        <div>
            <input type="checkbox" />
            {props.text}
        </div>
    );
}

export default Task;