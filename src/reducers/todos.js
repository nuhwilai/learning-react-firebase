
const initailState = [
    {id: -1, content: "washing a car", completed: false},
    {id: -2, content: "reading a book", completed: false}
]

// const initailState = [];

const todos = (state = initailState, action) => {
    switch (action.type) {
        case 'ADD_TODO' :
            return [
                ...state,
                {  
                    id: action.id,
                    content: action.content,
                    completed: false
                }
            ]
        case 'DELETE_TODO' :
            return state.filter(todo => todo.id !== action.id)
        case 'TOGGLE_TODO' :
            return state.map(todo => {
                if (todo.id !== action.id) {
                    return todo;
                }
                return {
                    ...todo,
                    completed: !todo.completed
                }
            })
        default:
            return state
    }
}

export default todos;