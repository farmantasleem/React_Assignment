import React from "react";
import "../styles/blogCard.css"

export const BlogCard=(props)=>{
    const {img,title,desc} = props
    return(
        <div className="blogCard">
            <img src={img} alt="" srcset="" />
            <h1>Blog Title: 
                {title}
            </h1>
            <p>
                Blog Description: {desc}
            </p>
            <button>Read Blog</button>
            <button>Edit Blog</button>
            <button>Delete Blog</button>
        </div>
    )
}