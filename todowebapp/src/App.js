import './App.css';
import React from "react"

function App() {
  const[todos,setTodos]=React.useState([])
  const[addtodo,setAddTodo]=React.useState({status:"Pending",task:""})

  return (
      <div>
        <div id='addTodo'>
          <input value={addtodo.task} onChange={e=>setAddTodo({...addtodo,task:e.target.value})} placeholder='Enter Todo Eg. Build Todo Web App'/>
          <button onClick={()=>{setTodos([addtodo,...todos])}}>Add</button>
        </div>
        <div id='todoContainer'>
             {
              todos.map((e,i)=>{
                return(
                  <div className='todo'>
                  <h1>{(i+1)+". "+e.task}</h1>
                  <p>Status: {e.status}</p>
                  <button>Update Status</button>
                  <button>Remove</button>
                </div>
                )
              })
             }
        </div>
      </div>
  );
}

export default App;
