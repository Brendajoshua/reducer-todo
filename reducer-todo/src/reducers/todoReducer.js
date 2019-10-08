export const initialState = {
    todosArr: [
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

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
        return {
            ...state,
            todosArr: [...state.todosArr, {
                id: Date.now(),
                item: action.playload,
                complete: false
            }]
        }
    }
}