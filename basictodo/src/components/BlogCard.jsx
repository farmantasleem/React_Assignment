import React from "react";
import "../styles/blogCard.css"
import { NavLink } from "react-router-dom";

export const BlogCard=(props)=>{
    const {img,title,desc,id:_id,setBlogData,blogData} = props
    const deleteBlog = async() => { 
        try { 
        const resp =  await fetch(`http://localhost:8081/blog/${_id}`,{
            method:"DELETE"
        });
        const parsedData = await resp.json();
        console.log(parsedData)
        setBlogData(...[parsedData.updatedData]||[])
        } catch (error) {
         console.log(error.message)
        }
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
           <NavLink to={`/read/${_id}`}> <button>Read Blog</button></NavLink>
            <button>Edit Blog</button>
            <button onClick={deleteBlog}>Delete Blog</button>
        </div>
    )
}