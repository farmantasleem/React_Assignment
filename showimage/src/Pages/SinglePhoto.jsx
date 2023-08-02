import React, { useEffect, useState } from "react";
import "../style/SinglePhoto.css"
import { useParams } from "react-router-dom";

export const SinglePhoto = () => {
    const[data,setData]=useState([]);
    const {id} = useParams()
    const getData=async()=>{
      const resp=await fetch(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
      const data=await resp.json();
      setData(data)
      console.log(data)
    }
  
    useEffect(()=>{
      getData()
    },[])
    return (
        <div id="singlePhoto">
                <img src="https://api.slingacademy.com/public/sample-photos/7.jpeg" alt="" />
                <div>
                    <h1>Title: Image Title Will be here</h1>
                    <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et placeat expedita,
                             possimus ea minus repellat aliquid ipsam libero distinctio laboriosam iure at asperiores 
                             velit incidunt qui autem sed nemo molestias. Ex molestiae beatae nemo, 
                             quidem provident illo atque, minima reprehenderit repellat tenetur porro iste! Cumque,
                              corporis id aut quasi amet eum saepe, provident asperiores reprehenderit perspiciatis accusamus, ab consectetur aliquam?
                    </p>
                </div>
        </div>
    )
}