import React, {useState, useEffect} from 'react';


import axios from 'axios';



const ComA = () =>{


    const [num , setnum ] = useState();

    useEffect(() => {

        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)

            console.log(res.data.name);
        }

        getData;
    });


    return (<>

    <h1 className='heading text-4xl font-extrabold '> You choose {num}  value</h1>

    <select  className="selection p-3 ml-2 bg-gray-300 border-[2px]" value={num} onChange ={(event) =>{

        setnum(event.target.value);
    }}>

        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
    
    </>);

} 
export default ComA;