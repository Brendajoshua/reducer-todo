import React, { useReducer } from 'react';
import './App.css';

//reducers
import { initialState, todoReducer } from './reducers/todoReducer';

//components
import TodoList from './components/TodoList';

function App() {
  const[state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (item) => dispatch({type:'ADD_ITEM', playload: item})
  const toggleTodo = (id) => dispatch({type: 'TOGGLE_ITEM', playload: id})

  return (
    <div className="App">
      <h1>To Do List</h1>
      <TodoList
      todoArr={state.todosArr}
      toggleTodo={toggleTodo}
      />
    </div>
  );
}

export default App;
