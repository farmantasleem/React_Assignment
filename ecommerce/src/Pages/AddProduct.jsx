import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import { addtoProduct } from "../redux/actions";

export const AddProduct =() => {
    const state = useSelector(state=>state);
    const[productData,setProductData]=useState({
        title:"",
        price:""
    })
    const dispatch = useDispatch()
    const handleSubmit =()=>{
        dispatch(addtoProduct(productData))
    }
    useEffect(()=>{
        console.log("I am called from add to cart",state)
    },[])
    return(
        <div>
                       <NavLink to={"/"}><button>Home</button></NavLink>
            <NavLink to={"/add"}><button>Add Product</button></NavLink>
            <h2>Add a New Product</h2>
            <label for="product-title">Product Title:</label>
            <input type="text" id="product-title" name="product-title" required value={productData.title} onChange={(e)=>setProductData((prev)=>{return {...prev,title:e.target.value}})}/>
            <label for="product-price">Product Price:</label>
            <input type="number" id="product-price" name="product-price" step="0.01" required value={productData.price} onChange={(e)=>setProductData((prev)=>{return {...prev,price:e.target.value}})}/>
            <button type="submit" onClick={handleSubmit}>Add Product</button>
        </div>
    )
}