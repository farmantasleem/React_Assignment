import { useEffect, useState } from "react"
import { Product } from "./Product"
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getTodo } from "../redux/todoSlice"

export const HomePage =() => {
    const[addCart,setCart] =useState([])
    const state = useSelector(state=>state);
    const dispatch= useDispatch()
    const handleTodo=()=>{
        dispatch(getTodo())
    }
    


    useEffect(()=>{
        console.log(state)
    },[addCart])
    return(<div class="container">
            <NavLink to={"/"}><button>Home</button></NavLink>
            <NavLink to={"/add"}><button>Add Product</button></NavLink>
            <button onClick={handleTodo}>Get Todo</button>

            {
               state.product.product.map((el,index)=>{
                   return <Product title={el.title} id={index} price={el.price}  addCart={addCart} setCart={setCart}/>
                    
                })
            }


            {
                state.todo.todoData.map((e)=>{
                    return <li>{e.title}</li>
                })
            }
</div>)
}