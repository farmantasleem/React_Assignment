import React, { useState } from "react";
import { Header } from "../components/Header";
import { BlogCard } from "../components/BlogCard";
import "../styles/homepage.css"

export const HomePage=({blogData})=>{
    return(
        <div id="HomePage">
        
            <div id="blogParent">
             {
                blogData.map((e)=>{
                    return <BlogCard img={e.img} desc={e.desc} title={e.title}/>
                })
             }
          
            </div>
        </div>
    )
}