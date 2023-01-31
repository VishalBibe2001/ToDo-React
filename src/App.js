import React, { useState, useEffect } from "react";
import {Switch, Route } from "react-router-dom";
// import "./App.css";
import Header from "./components/Header";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
import AddTodo from "./components/AddTodo";
import About from "./components/About";

function App() {
  let initTodo;

  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
 
  const onDelete = (todo) => {
    console.log("onDelete", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    // let index = todos.indexOf(todo);
    // setTodos(todos.splice(index, 1));
    // localStorage.getItem("todos");
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    let myTodo = {
      sno,
      title,
       desc,
    };
    setTodos([...todos, myTodo]);

    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
        <Header />

        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>
          <Route path={"/about"}>
            <About />
          </Route>
        </Switch>

        <Footer />
    </>
  );
}

export default App;
