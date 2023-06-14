import './App.css';
import React from "react"
import { Todo } from './Component/Todo';

function App() {
  const[todos,setTodos]=React.useState([])
  const[addtodo,setAddTodo]=React.useState({status:"Pending",task:""})

  function statusUpdate(index){
    const newArray=todos.map((e,i)=>{
      if(i==index){
        return {...e,status:e.status=="Pending"?"Completed":"Pending"}
      }
      return e
    })
    setTodos([...newArray])
  }

  function removeTodo(index){
    const newArray=todos.filter((e,i)=>{
      if(i!=index){
        return e
      }
   
    })
    setTodos([...newArray])
  }

  return (
      <div>

        <div id='addTodo'>
          <input value={addtodo.task} onChange={e=>setAddTodo({...addtodo,task:e.target.value})} placeholder='Enter Todo Eg. Build Todo Web App'/>
          <button onClick={()=>{setTodos([addtodo,...todos])}}>Add</button>
        </div>
        <div id='todoContainer'>
             {
              todos.map((e,i)=>{
                return <Todo e={e} i={i} removeTodo={removeTodo} statusUpdate={statusUpdate}/>
              })
             }
        </div>
      </div>
  );
}

export default App;
