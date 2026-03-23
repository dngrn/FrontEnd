import React, { useState } from 'react'


function JsonView() {

    const [dict, setDict] = useState ([
        {name:"Dina",age:20},
        {name:"Kasi", age:21},
        {name:"Anoop",age:14},
        {name:"Tecson", age:26},
        {name:"Vinoth",age:24},
        {name:"Sun", age:51},
    ]);
 
    return(
        <div>
        {dict.map((di)=>(
            <div>
                <h2>{di.name}</h2>
                <h2>{di.age}</h2>
            </div>

        ))}

        </div>
    );

}
export default JsonView;