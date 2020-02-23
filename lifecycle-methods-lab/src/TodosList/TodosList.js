import React from "react"

const TodoList = ({list,onClick})=>{
    let toDoItems = list.map((item,i)=>{
        return(<li key={i} id={i} className={"toDoItem"} > {item} <button onClick={onClick}>Delete</button></li>)
    }
    )
    return(
        <ul>
            {toDoItems}
        </ul>
    )
}

export default TodoList