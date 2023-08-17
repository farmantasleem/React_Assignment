import React from "react";
import "../styles/blogCard.css"
import { NavLink } from "react-router-dom";

export const BlogCard=(props)=>{
    const {img,title,desc,id,setBlogData,blogData} = props
    const deleteBlog =()=>{
        const newArr=blogData.filter((e,i)=> id!==i )
        console.log(newArr)
        setBlogData([...newArr])
        localStorage.setItem("blogData",JSON.stringify(newArr))
    }

    return(
        <div className="blogCard">
            <img src={img} alt="" srcset="" />
            <h1>Blog Title: 
                {title}
            </h1>
            <p>
                Blog Description: {desc}
            </p>
           <NavLink to={`/read/${id}`}> <button>Read Blog</button></NavLink>
            <button>Edit Blog</button>
            <button onClick={deleteBlog}>Delete Blog</button>
        </div>
    )
}