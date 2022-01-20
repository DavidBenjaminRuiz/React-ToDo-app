import React from 'react';

export  function TodoItem( {todo, toggleTodo} ) {
    const {id , text, completed} = todo;
    const chageStatus = () => {
        toggleTodo(id);
    }
    return <li> <input type= "checkbox" checked={completed}  onChange={chageStatus}/> {text} </li>;
}
