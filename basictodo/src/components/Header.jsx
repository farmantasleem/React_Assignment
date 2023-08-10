import React from "react";


import "../styles/header.css"
import { NavLink } from "react-router-dom";

export const Header =()=>{

    return(
        <div id="Header">
            <h1>PWBlog</h1>
            <div>
                <NavLink to={"/"}><button>Home</button></NavLink>
                <button>Blogs</button>
               <NavLink to={"/addblog"}> <button>Add Blog</button></NavLink>
            </div>
        </div>
    )
}