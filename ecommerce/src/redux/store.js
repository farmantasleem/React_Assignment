import {configureStore} from "@reduxjs/toolkit"

import productSlice from "./productSlice";
import todoSlice from "./todoSlice";

export const store = configureStore({
  reducer:{
    product:productSlice,
    todo:todoSlice
  },
  devTools:true
})

// you would have only one store?? this is for sure?




