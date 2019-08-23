import React,{useState} from 'react';

function StepTracker(){

    const [steps,setSteps]=useState(0);

    function increment(){
        
        setSteps(steps=>steps+1);
    }

    return(
        <div>
            总共走了{steps}步!<br></br>
            <button onClick={increment}>点我！！</button>
        </div>
    )
}

export default StepTracker;