import React from "react";

export const Todo=({e,statusUpdate,i,removeTodo})=>{
    return(
        <div className='todo'>
        <h1>{(i+1)+". "+e.task}</h1>
        <p>Status: {e.status}</p>
        <button onClick={()=>{statusUpdate(i)}}>Update Status</button>
        <button onClick={()=>{removeTodo(i)}}>Remove</button>
      </div>
      )
}