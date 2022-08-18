import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'

function TodoSearch(props) {

    const { searchValue, setSearchValue } = React.useContext(TodoContext);

    const valueChange = (event) => {
        setSearchValue(event.target.value)
    }

    return [
        <input 
        className="TodoSearch" 
        placeholder="Onions"
        value={searchValue}
        onChange={valueChange}
        />
    ];
};

export { TodoSearch };