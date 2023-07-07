import React, { useState } from "react";
import "./style.css"

export const Calculator=()=>{
    const[finalString,setFinal]=useState("")
    const  handlInput=(event)=>{
            setFinal(finalString+""+event.target.value)
    }
    const showOutPut=()=>{
        const value=eval(finalString)
        setFinal(value)
    }
    const resetOutput=()=>{
        setFinal("")
    }
  return(
        <div id="calculator">
               <div className="hstack"> 
                      <input type="text" value={finalString} placeholder="0.00"/>
                      <button onClick={resetOutput}> Clear</button>
               </div>
               <div id="operator">  
                   <button value={1}   onClick={handlInput}>1</button>
                    <button value={2}   onClick={handlInput} >2</button>
                    <button value={3}   onClick={handlInput}>3</button>
                    <button value={4}   onClick={handlInput}>4</button>
                    <button value={5}   onClick={handlInput}>5</button>
                    <button value={6}   onClick={handlInput}>6</button>
                    <button value={7}   onClick={handlInput}>7</button>
                    <button value={8}   onClick={handlInput}>8</button>
                    <button value={9}   onClick={handlInput}>9</button>
                    <button value={0}  onClick={handlInput} >0</button>
                    <button value={"*"} className="operators"  onClick={handlInput}>*</button>
                    <button value={"+"} className="operators"  onClick={handlInput}>+</button>
                    <button value={"-"} className="operators"  onClick={handlInput}>-</button>
                    <button value={"/"} className="operators"  onClick={handlInput} >/</button>
                    <button value={"="} className="operators"  onClick={showOutPut} >=</button>
                  
               </div>  
        </div>
    )
}