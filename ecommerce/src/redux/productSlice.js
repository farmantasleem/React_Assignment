import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    product:[]
}


const productSlice = createSlice({
    name:"product",
    initialState,   

    reducers:{
        addProduct(state,action){
                state.product.push(action.payload)
        },

        deleteProduct(state,action){
           const newProductArray = state.product.filter((el,index)=>index!==action.payload) 
           return { ...state,product:newProductArray}
        },
        
    },
   

})


export default productSlice.reducer;

export  const actions = productSlice.actions
