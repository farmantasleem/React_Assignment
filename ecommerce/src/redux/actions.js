import { ADDTOCART, DELETEPRODUCT } from "./actionTypes"

// ACTION SHOULD ONLY RETURN A OBJECT 

export const addtoProduct=(productData)=>{
    return {type:ADDTOCART,payload:productData}
}



// action to delete a product
export const deleteProduct=(id)=>{
    return {type:DELETEPRODUCT,payload:id}
}