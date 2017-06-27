let nextTodoId = 0;

export const addTodo = (content) => ({
    type: "ADD_TODO",
    id: nextTodoId++
})

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
})