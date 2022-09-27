import React, {useState}  from 'react';
import {AiOutlinePlus , AiOutlineMinus} from "react-icons/Ai";


const TodoList = () => {

    const [num , setNum ] = useState (0);

    const increment =  () => {

        setNum (num+1);
    }

    const decrement = () => {

        if(num > 0){
            setNum (num-1);

        } 
        else if (num == 0)
        {
             alert("this is last point");
             setNum(0);
        }

    }

    return (
        <>
        <div className='container h-[100vh] max-w-full flex flex-row justify-center items-center text-center bg-purple-500'>
            <div className='Todo h-[60vh] w-[25%] flex flex-col justify-center items-center rounded-md shadow-2xl bg-white'>
                <div className='divsn mb-[100px] h-[60px] w-[100%] bg-purple-500 text-black text-3xl font-extrabold'>
                    <h1>{num}</h1>
                </div>
                <div className='btn flex justify-between'>
                <button className='btn1 bg-purple-500 rounded-md pr-[10px] pl-[10px] pt-[5px] pb-[5px] mr-2 text-4xl' onClick={increment}><AiOutlinePlus/></button>
                <button className='btn2 bg-purple-500 rounded-md pr-[10px] pl-[10px] pt-[5px] pb-[5px] mr-2 text-4xl' onClick={decrement}><AiOutlineMinus/></button>
                </div>
            </div>
        </div>
        </>
    );
}
export default TodoList;