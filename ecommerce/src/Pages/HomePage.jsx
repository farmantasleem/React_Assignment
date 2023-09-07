import { useEffect, useState } from "react"
import { Product } from "./Product"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"

export const HomePage =() => {
    const[addCart,setCart] =useState([])
    const state = useSelector(state=>state);
    
    


    useEffect(()=>{
        console.log(state)
    },[addCart])
    return(<div class="container">
            <NavLink to={"/"}><button>Home</button></NavLink>
            <NavLink to={"/add"}><button>Add Product</button></NavLink>

            {
                state.product?.map((el)=>{
                   return <Product title={el.title} id={el.id} price={el.price}  addCart={addCart} setCart={setCart}/>
                    
                })
            }
</div>)
}