import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./appUI";
// import './App.css';
  
function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export { App };
