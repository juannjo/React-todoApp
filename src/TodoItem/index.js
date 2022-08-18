import React from "react";
import './TodoItem.css';
import { CheckButton } from "../TodoList/CheckButton";
import { DeleteButton } from '../TodoList/DeleteButton';
 
function TodoItem(props){
    

    return[
        <li className="TodoItem">
            <span
                onClick={props.onComplete} 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
                <CheckButton />
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span onClick={props.onDelete} 
                className="Icon Icon-delete">
                <DeleteButton />
            </span>
        </li>
    ];
};

export { TodoItem };