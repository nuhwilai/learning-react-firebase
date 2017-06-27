
const initailState = [
    {id: -1, content: "washing a car", completed: false},
    {id: -2, content: "reading a book", completed: false}
]

export default (state = initailState, action) => {
    switch (action) {
        case 'ADD_TODO' :
            return [
                ...state,
                {  
                    id: action.id,
                    content: action.content,
                    completed: false
                }
            ]
        case 'DELELTE_TODO' :
            return state.filter( (todo) => todo.id != action.id )
        case 'TOGGLE_TODO' :
            return [
                ...state,
                {
                    ...state.find((todo) => todo.id == action.id),
                    completed: !action.completed
                }
            ]
        default:
            return state
    }
}