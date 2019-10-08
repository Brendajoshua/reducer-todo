import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return(
        <div>
            {props.todosArr.map(todo => (
                <Todo key = {todo.id} item = {todo} />
            ))}
        </div>
    )
}

export default TodoList;
