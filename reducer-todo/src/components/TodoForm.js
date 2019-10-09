import React, { useState } from 'react';

const TodoForm = (props) => {
    const [newToDo, setNewTodo] = useState ('')

    const handleChanges = event => {
        setNewTodo(event.target.value);
    }

    const submitItem = event => {
        event.preventDefault();
        if (newToDo !== '') {
            props.dispatch({ type: 'ADD_ITEM', payload: newToDo })
            setNewTodo('');
        }
    };

    return (
        <form className="sameLine" onSubmit={submitItem}>
            <input
            type="text"
            value={newToDo}
            name="item"
            onChange={handleChanges}
            />
            <button>Add Todo</button>
        </form>
    )
}

export default TodoForm;