import React, { useEffect, useState } from "react";
import "../styles/ReadBlog.css"
import { useParams } from "react-router-dom";

export const ReadBlog=()=>{
    const {id} =useParams()
    const[singeData,setSingleData]=useState({})
    const getData = async() => { 
        try { const resp =  await fetch(`http://localhost:8081/blog/${id}`);
        const parsedData = await resp.json();
        setSingleData(parsedData||{})
         
        } catch (error) {
         console.log(error.message)
        }
     }
     useEffect(()=>{
        getData()
     },[])
    return(
        <div id="ReadBlog">
               <img src={singeData?.img} alt="" />
               <h1>blog Title : {singeData?.title}</h1>
               <p>
                blog content : {singeData?.content}
               </p>
        </div>
    )
}