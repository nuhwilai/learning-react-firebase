
const initailState = [
    // {id: -1, content: "washing a car", completed: false},
    // {id: -2, content: "reading a book", completed: false}
]

// const initailState = [];

const todos = (state = initailState, action) => {
    // console.log(`type = ${action.type}`, action)

    switch (action.type) {
        case 'ADD_TODO_SUCCESS' :
            return [
                ...state,
                { ...action.playload }
            ]
        case 'DELETE_TODO_SUCCESS' :
            return state.filter(todo => todo.id !== action.id)
        case 'UPDATE_TODO_SUCCESS' :
            return state.map(todo => {
                if (todo.id !== action.playload.id) {
                    return todo;
                }
                return action.playload
            })
        case 'LOAD_SUCCESS' :
            return [
                ...action.todos
            ]
        default:
            return state
    }
}

export default todos;