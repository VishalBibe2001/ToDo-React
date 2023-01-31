import React from "react";
import TodoItem from "./TodoItem";

const Todos=(props)=>{
    // console.log(props.todos);
    let TodosStyle ={
        minHeight:"70vh",
        margin:"10px auto"
    }
    return(
        <div className="container my-3" style={TodosStyle}>
            <h4 className="my-3">Todos List</h4>
            {props.todos.length===0?"No todos create yet": 
            props.todos.map((todo)=>{
                return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> 
                 })
            }
        </div>
    );  
}
   
export default Todos;