import React from "react";




const Wishlist = () =>{
    const [query , setQuery] = React.useState("");
    const [tasks , setTasks] = React.useState([]);
    let count = 0;

    
const add = ()=>{
    const current = {
        todo : query,
        status : false,
    };

    let updatedTask = [...tasks , current];
    setTasks(updatedTask);
    count++;
    
}
const change = (e) =>{
    const {value} = e.target;
    setQuery(value);
}
if(count > 3){
    return <>
    You cannot add more than 3;
    </>
}
    return (
        <>
            <h1>
                Wishlist
            </h1>
            <input type="text" placeholder="Enter Text" onChange={change}/>
            <button onClick={add}>ADD</button>
            {tasks.map(({ todo , status} , idx)=>(
                <div key = {idx}> {todo}</div>
            ))}
        </>
    )
}

export  {Wishlist};