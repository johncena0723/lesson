import React from "react";
export default function NiceFunc(props) {
   console.log(props);
   const clicked=() =>{
    alert(1);
   }
    return (
        <>
    <div> Hello from Func Comp</div>
    
    <button onClick={clicked}> click me</button>
    </>
    );
}