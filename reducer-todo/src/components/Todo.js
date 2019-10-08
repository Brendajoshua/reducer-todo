import React from 'react';

const Todo = props => {
    return (
        <div
            onClick={() => props.toggleTodo(props.item.id)}
            className = {`items${props.item.completed ? 'completed': ''}`}>
                <p>{props.item.item}</p>
        </div>
    )
}

export default Todo;