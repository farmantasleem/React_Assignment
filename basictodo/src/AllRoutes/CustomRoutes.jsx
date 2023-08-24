import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { AddBlog } from "../pages/AddBlog";
import { ReadBlog } from "../pages/ReadBlog";


export const CustomRoutes=()=>{
    
    return(
        <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/addblog" element={<AddBlog/>}/>
                <Route path="/read/:id" element={<ReadBlog />}/>

        </Routes>
    )
}