import React, { useReducer } from 'react';
import './App.css';

//components
import TodoList from "./components/TodoList";

//reducers
import { initialState, reducer } from "./reducers/TodoReducer";

//styles
import "./components/Todo.css";

export default function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<div>
			<h1>To Do List</h1>
			<TodoList toDoList={state.toDoList} state={state} dispatch={dispatch} />
		</div>
	);
}