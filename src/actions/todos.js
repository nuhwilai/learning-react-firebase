let nextTodoId = 0;

export const addTodo = (content) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    content
})

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
})

export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    id
})