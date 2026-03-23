import React, {useEffect, useState} from 'react';


export default function ApiCall(){

    // const [count,setCount]=useState(0);
    // const [name,setName]=useState("Dina");

    const [data, setData]=useState([]);

    // const handleCount=()=>{
    //     setCount(count+1);
    // }

    // const handleName=()=>{
    //     setName("Luffy");
    // }

    useEffect(()=>
        {
            handleApi();
        },[]
    )
    
    const handleApi= async ()=>{

        let site=await fetch("https://fakestoreapi.com/products");
        let result=await site.json();
        setData(result);
    };

    return(
       <div>

        {/* <h2>Change of useState - {count},{name}</h2>
        <button onClick={handleCount}>update</button> */}

         {/* <button onClick={handleApi}>View</button>  */}

         {data.map((da)=>(
            <div>
                <h2>{da.title}</h2>
                <img height={100} width={150} src={da.image}/>
                <h3>{da.price}</h3>
                <h4>{da.rating.count}</h4>
                
            </div>
         ))}
      </div>
    );
}

