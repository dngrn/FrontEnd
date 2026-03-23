import React, { useState } from "react";

export default function Crud() {

    const [name, setName] = useState("");
    const [age,setAge]=useState(0);
    const [view,setView]=useState(false);

    const handleName = (e) => {
        setName(e.target.value);
        
    }
    const handleAge = (e) => {
       setAge(e.target.value);
    }

    const handleChange=()=>{
        setView(true);
    }
    
    return (
        <div>
            
            {!view ?(
                <div>
                <label>Name: </label>
            <input onChange={handleName} placeholder="Enter Name" />
            <br/>
            <label>Age: </label>
            <input onChange={handleAge} placeholder="Enter Age" />
            <br/>
            <button onClick={handleChange}>Submit</button>
            </div>
            ):null}
            

            {view?(
                <div>
            <h2>Name - {name}</h2>
            <h2>Age - {age}</h2>
            </div>
            ):null
           }


        </div>
    );
}