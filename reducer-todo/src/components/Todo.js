import React from 'react';

const Todo = props => {
    return (
        <div
            onClick={() => (props.item.id)}
            className = {`items${props.item.complete ? 'complete': ''}`}>
                <p>{props.item.item}</p>
        </div>
    )
}

export default Todo;