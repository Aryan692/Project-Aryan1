import React,{useState} from 'react';
import Sresult from './Sresult';


const Search = () => {

    const [img , setImg ] = useState("");


    const inputevent = (event) => {
    const data = event.target.value;

   setImg(data);

    }
    return (<>
    <div className='divi text-center flex justify-center flex-col items-center mt-3'>

   <input  className="input flex justify-center items-center p-1  border-[2px] border-black"type="text" placeholder='search anything' value={img} onChange={inputevent} />
    

    <Sresult  className="img mt-3"  name={img} />
    </div>
    </>);
}
export default Search;
