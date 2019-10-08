import React, { useState } from 'react';

const TodoForm = (props) => {
    const [newTodo, SetNewTodo] = useState ()

    const handleChanges = event => {
        SetNewTodo(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.addTodo(newTodo);
        SetNewTodo('');
    }

    return (
        <form onSubmit = {handleSubmit}>
            <input
            type="text"
            value={newTodo}
            name="newTodo"
            onChange={handleChanges}
            />
            <button>Add Todo</button>
            <button onClick={() => props.clearComplete()}>Clear Completed</button>
        </form>
    )
}

export default TodoForm;