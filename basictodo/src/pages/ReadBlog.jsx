import React, { useEffect, useState } from "react";
import "../styles/ReadBlog.css"
import { useParams } from "react-router-dom";

export const ReadBlog=({blogData})=>{
    const {id} =useParams()
    const[singeData,setSingleData]=useState({})
    useEffect(()=>{
      const singleArray= blogData.filter((e,i)=>{
            return id==i
        })
setSingleData({...singleArray[0]})
console.log(singleArray)

    },[id])
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