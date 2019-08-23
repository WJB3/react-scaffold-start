import React,{useState} from 'react';

function demo3(){
    const [items,setItems]=useState([]);
    const addItem=()=>{
        setItems([
            ...items,
            {
                id:items.length,
                value:Math.random()*100
            }
        ]);
    }
    return(
        <div>
            <button onClick={addItem}>增加</button>
            <ul>
                {items.map(item=>(
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    )
}

export default demo3;