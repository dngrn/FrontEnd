import React,{useState , useEffect} from 'react';
import axios from 'axios';

export default function Actions(){

    const [datas,setDatas]=useState([]);

    useEffect(()=>{
        handleGet()
    },[]);

    const handleGet=async()=>{
        let file= await axios.get("http://localhost:3000/todoList");
        setDatas(file.data);
    }

    const handleDelete=async(id)=>{
        let del=await axios.delete("http://localhost:3000/todoList/" +id);
        handleGet()

    }
    const handlePost=async()=>{
        let pst=await axios.post("http://localhost:3000/todoList");
        handleGet()
    }

    
    return(
        <div>
         <input placeholder="Enter"/>
         <button>SUBMIT</button>

         {datas.map((da,i)=>(
            <div>
                <h2>{i+1} - {da.task} - {da.id}</h2>
                <button onClick={()=>handleDelete(da.id)}>Delete</button>
            </div>
         ))}

        </div>
    );
}