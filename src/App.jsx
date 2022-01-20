import React, {useRef, useState} from "react";
import { TodoList } from "./components/TodoList";
import { v4 as uuidv4 } from 'uuid';

export function App() {
    const [todoItems, setTodoItems] = useState([
        { id: 1, text: "Buy milk" },
        { id: 2, text: "Play with dog" },
        { id: 3, text: "Go to the gym" }
    ]);
    const todoRef = useRef();
    const toggle_todo = (id) => {
        setTodoItems(
            todoItems.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        );
    }

    const add_todo = () => {
        const task = todoRef.current.value;
        if(!task || task === "") return;
        setTodoItems([...todoItems, { id: uuidv4(), text: task, completed: false }]);
        todoRef.current.value = "";
    }

    return (
        <React.Fragment>
            <TodoList todo_items = { todoItems } toggleTodo = {toggle_todo} />
            <input ref={ todoRef } type="text"  placeholder="Nueva Tarea" />
            <button onClick={ add_todo }> Agregar➕ </button>
            <div>
                te quedan { todoItems.filter(todo => !todo.completed).length } tareas por hacer
            </div>

        </React.Fragment>
    )

}
