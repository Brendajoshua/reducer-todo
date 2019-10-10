import React, { useReducer } from 'react';
import Todos from './components/Todo';
import TodoForm from './components/TodoForm';
import { reducer, initialState } from './reducers/todoReducer';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <Todos todos={state.todos} dispatch={dispatch} />
      <TodoForm state={state} dispatch={dispatch} />
    </div>
  );
};

export default App;