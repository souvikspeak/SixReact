import React, {useReducer} from "react";
import {Container} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import {TodoContext} from "./context/TodoContext"
import todoReducer from "./context/reducer"
import Todos from "./Components/Todos";


const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  return(
    <TodoContext.Provider value={{todos, dispatch}}>
      <Container fluid>
        <h1>Todo App with Context API</h1>
        <Todos />
      </Container>
    </TodoContext.Provider>
  )
};

export default App;
