import React, {useState} from 'react';




const DigitalWatch =()=>{

    let newtime = new Date().toLocaleTimeString();
    const [CurrTime, setCtime] = useState(newtime);

     
    const updatetime =()=>{

        let newtime = new Date().toLocaleTimeString();

        setCtime(newtime);

    };
setInterval(updatetime, 1000);

    return(
     <>
    <h1>{CurrTime}</h1>
    </>
    );
}

export default DigitalWatch;