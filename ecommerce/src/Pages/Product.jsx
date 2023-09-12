import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { actions } from "../redux/productSlice"
// import { deleteProduct } from "../redux/actions"
export const Product =({title,price,addCart,setCart,id}) => {
 const dispatch =useDispatch()
 
  const handleClick=()=>{
      dispatch(actions.deleteProduct(id))
    }
    return(
        <div class="product">
      <div class="product-title">{title}</div>
      <div class="product-price"> {price}</div>
      <button onClick={handleClick}>Delete Product</button>
    </div>
    )
}