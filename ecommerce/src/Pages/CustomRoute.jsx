import { Route, Routes } from "react-router-dom"
import { HomePage } from "./HomePage"
import { AddProduct } from "./AddProduct"

export const CustomRoute =() =>{
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/add" element={<AddProduct/>}/>
        </Routes>
    )
}