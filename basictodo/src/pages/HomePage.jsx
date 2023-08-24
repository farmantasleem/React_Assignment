import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { BlogCard } from "../components/BlogCard";
import "../styles/homepage.css"

export const HomePage=()=>{
    const[blogData,setBlogData]=useState()
    const getData = async() => { 
       try { const resp =  await fetch("http://localhost:8081/blog");
       const parsedData = await resp.json();
       setBlogData(parsedData?.data||[])
        
       } catch (error) {
        console.log(error.message)
       }
    }

    useEffect(()=>{
        getData()
    },[])
   
    return(
        <div id="HomePage">
        
            <div id="blogParent">
             {
                blogData?.map((e,i)=>{
                    return <BlogCard img={e.img} desc={e.desc} title={e.title} id={e._id} setBlogData={setBlogData} blogData={blogData}/>
                })
             }
          
            </div>
        </div>
    )
}