import React, {useState} from 'react';


function Counter() {

    const [count, setCount] = useState(0);
    const [name, setName]=useState("Dina");

    const handleClick = () =>{
        
        setCount(count+1)

        if(name=="Dina"){
        setName("kasi")
        }else{
            setName("Dina")
        }
    }
    
    return (
        <div>
            <h2>Counter - {count}</h2>
            <h2>{name}</h2>
            <button onClick={handleClick}>Click</button><br></br>
            <button onClick={() =>
                alert("you clicked the wrong button")
            } >add</button>
            <button>Submit</button>
        </div>
    )
}

export default Counter;