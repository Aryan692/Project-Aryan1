import React, {useState} from 'react';
import { FcTodoList  } from "react-icons/Fc";
import { BsPlusLg} from "react-icons/Bs";
import {RiDeleteBin6Line} from "react-icons/Ri";

const TodoList = () =>{

    const [inputdata, setinputdata] = useState ('');
    const[items , setItems] = useState ([]);

    const Additem = () => {
        if(!inputdata){


        } else{

        setItems([...items, inputdata]);
        setinputdata('');

        }
    }


    const deleteitems = (id) =>{
        const updatedData = items.filter((elem, ind) => {
            return ind !== id;

        });
        setItems(updatedData)
    }


    const removeAll = () => {

            setItems([])
    
    }

    return (<>

    <div className='main-div  max-w-full h-[100vh] justify-center items-center flex bg-blue-900'>

        <div className='divi w-[300px] h-[450px]  rounded-lg bg-black'>
             <h1 className='heading1 text-center mt-[15px] text-3xl font-serif font-semibold text-white'>TodoList</h1>
            <span ><FcTodoList className='icon h-[60px] w-[50px] ml-[130px] mt-[20px] text-white shadow-2xl' />
            <p className='spani text-center text-red-500  text-2xl font-mono ml-[10px]  cursor-pointer hover:text-white'>Add your List here ✌️</p></span>

             <div className='plus flex'>
             <input className='inp  h-[40px] mt-[30px]  ml-[30px] px-[31px] rounder-sm  flex  items-center justify-center text-start' type="text" 
             placeholder='✍️... Add items'
             value ={inputdata}
             onChange={(e) => setinputdata(e.target.value)}
                />
             <BsPlusLg className='plusicon mt-[44px] ml-[-20px] cursor-pointer hover:text-blue-600' onClick={Additem} />
             </div>


<div className='divi2'>     
{
    items.map((elem,ind) =>{
        return (<>
        <div  key={ind} className='show-items border-[2px] h-[30px] bg-blue-600  border-black mt-[5px] ml-[30px] mr-[26px] hover:bg-white'>
            <h1 className='heading text-center  ml-[-150px] font-mono font-bold'>{elem}</h1>
           
            <RiDeleteBin6Line className='del mt-[-20px]  cursor-pointer hover:text-red-500 ml-[220px]' onClick={() => deleteitems(ind)} />
            
         </div>
            </>
            )
        })
    }
      </div>
             <button className='btn border rounded-md border-gray-300 bg-blue-500 mt-[10px] ml-[37%]  py-[4px] px-[8px] hover:bg-blue-600'  onClick={removeAll}>Remove All</button>
        </div>


    </div>
        
        </>)
}

export default TodoList;
