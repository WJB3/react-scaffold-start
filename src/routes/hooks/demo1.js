import React,{useState} from 'react';

function demo1({text}){
    const [hidden,setHidden]=useState(false);

    return (
        <div>
            {!hidden?<button onClick={()=>setHidden(true)}>{text}</button>:text}
        </div>
    )
}

export default demo1;