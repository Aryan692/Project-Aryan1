import React from 'react';
import {GrAdd } from "react-icons/Gr";


const CreateNote = () => {

    return (<>

    <div className='textarea flex  border-[1px] border-black justify-center  bg-white'>
        <form>
            <input type="text" placeholder='Title' autoComplete='off'  className='inp w-[500px] h-[300px] border-[2px]  border-gray-200 shadow-2xl'/>
            <textarea cols="30" rows="10" placeholder='write a note...' className='textareaa mt-[100px] border-[2px] border-gray-400 shadow-2xl'></textarea>
            <button className='btn rounded-full text-4xl border-[2px]'><GrAdd className='add  text-yellow-600'/></button>
        </form>
    </div>
             
    </>);
}

export default CreateNote;