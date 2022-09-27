import React,{useState} from 'react';



const Hooks = ()=>{
    
    const [count , setCount] = useState(0);
    
    const handleIncNum=()=>{
        
        setCount(count+ 1);
    
    
    }
    return (
    <>
   
        
   
    <div  className='container'>
    <h1 className="heading text-2xl pl-[10px]">{count}</h1>
    <button className='btn rounded-sm bg-gray-300 w-[60px] h-[50px]'  onClick={handleIncNum}>Click Me</button>
    </div>
   
    </>);

} 
export default Hooks;