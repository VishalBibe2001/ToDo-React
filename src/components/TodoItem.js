import React from "react";

const TodoItem=(props)=>{
    const {sno, title, desc} = props.todo;
    return(
        <div>
            <h5>{title}</h5>
            <p>{desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
            <hr/>
        </div>
    );
}

export default TodoItem;