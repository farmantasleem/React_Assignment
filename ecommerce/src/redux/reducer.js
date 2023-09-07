import { ADDTOCART, DELETEPRODUCT } from "./actionTypes"

const initialState = {
    auth:false,
    product:[ {title:"Iphone 11",price:"90K",id:1},
    {title:"Iphone 12",price:"110K",id:2},
    {title:"Nokia 1200",price:"1.9k",id:3},
    {title:"Nokia C2",price:"0.9K",id:4},],
    cartItem:[],
}

function reducer(oldState=initialState,{type="",payload=""}){
    switch(type){
        case ADDTOCART:
            return {...oldState,product:[...oldState.product,payload]}
        
        case DELETEPRODUCT:
            const newProductArray = oldState.product.filter((el)=>el.id !==payload);
            return {...oldState,product:[...newProductArray]}
        default:
            return oldState  
    }
}


export default reducer