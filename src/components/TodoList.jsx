import React from 'react';
import { TodoItem } from './TodoItem';
export function TodoList({ todo_items, toggleTodo }) {
    return (
    <ul>
        {todo_items.map(todo => (
            <TodoItem key={todo.id} todo={todo} toggleTodo = {toggleTodo} />
        ))}
    </ul>
    );   
}
