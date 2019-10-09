export const initialState = {
    todoItems: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 1
        },
        {
            item: 'Read a book',
            completed: false,
            id: 2
        }
    ]
};

export const TOGGLE_ITEM = "TOGGLE_ITEM";
export const ADD_ITEM = "ADD_ITEM";
export const CLEAR_TODO = "CLEAR_TODO";
export const ON_INPUT_CHANGE = 'ON_INPUT_CHANGE';

export const reducer = (state, action) => {
	switch (action.type) {
		case TOGGLE_ITEM:
			const toggleTodo = state.todoItems.map(todo => {
				if (todo.id === action.payload.id) {
					return { ...todo, completed: !todo.completed };
				} else {
					return todo;
				}
			});

			return {
				...state,
				todoItems: toggleTodo
			};
		case ADD_ITEM:
			return {
				...state,
				todoItems: [
					...state.todoItems,
					{
						item: action.payload,
						id: Date.now(),
						completed: false
					}
				]
			};
		case CLEAR_TODO:
			return {
				todoItems: state.todoItems.filter(item => !item.complete)
			};
		case ON_INPUT_CHANGE:
			return {
				todoItems: [...state, ...action.payload]
			};

		default:
			return state;
	}
};