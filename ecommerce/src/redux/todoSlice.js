import { createSlice } from "@reduxjs/toolkit" // imported slice

// step 2 - > define initialState
const initialState = { 
    todoData: []
}

const todoSlice = createSlice({
    name:"todo",
    initialState:initialState,
    reducers : {
        // actions??

        setTodo(state,action){
            state.todoData.push(...action.payload)
        }
    }

})


export default todoSlice.reducer

export const actions = todoSlice.actions;

// async operation


export const getTodo=() => {
    return async(dispatch,getState)=>{
            try {
                const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
                const data = await resp.json();
                dispatch(actions.setTodo(data))
                
            } catch (error) {
                
            }
    }
}