import React from "react";
import { TodoContext } from "../TodoContext/index.js";
import { TodoCounter } from '../TodoCounter/index.js';
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js"
import { TodoForm } from "../TodoForm/index.js";
import { TaskList } from "../ContentLoader/index.js";
import { CreateTodoButton } from "../CreateToDoButton/index.js";
import { Modal } from "../Modal"

function AppUI() {
    const { error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal, 
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            {<TodoCounter />}
            {<TodoSearch />}
            
            <TodoList>
                {error && <p>U r fucked!</p>}
                {loading && <TaskList />}
                {(!loading && !searchedTodos.length) && <p>Crea un TODO o chinga tu madre</p>}

                {searchedTodos.map(todo =>(
            <TodoItem 
                key={todo.text} 
                text={todo.text} 
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
            />))}
            </TodoList>
        
            {openModal && 
                (<Modal>
                    <TodoForm />
                </Modal>
            )}

            {<CreateTodoButton 
                setOpenModal={setOpenModal}
                openModal={openModal}
            />}
        </React.Fragment>
    );
};

export { AppUI };