import React, {useState} from "react";
import { AiFillAudio } from "react-icons/ai";



const Form = () =>{

  

    const[fullname, setfullname] = useState(
    {
    fname: "",
    lname: ""
    });

    const inputChange = (event) =>{
   
      const value = event.target.value;
      const Name = event.target.Name;
   
      setfullname((prevalue)=>{
      
       if(Name === "fname"){
         return {
           fname: value,
           lname: prevalue.lname,
         };
       }
         else if(Name === "lname"){
           return {
           fname: prevalue.fname,
           lname: value,
         };
         }
        });
        
      }
      const onSubmit = (event)=> {
        
        event.preventDefault();
      }
      
      
      
      return(
        <>
      <form  onSubmit={onSubmit}>
      <div>
        <h1 className="heading text-4xl">Hello {fullname.fname} {fullname.lname} </h1>

        <input className="cls border-[2px]" type="text" placeholder="Enter your first name" onChange={inputChange} name="fname" value={fullname.fname}/>


        <input  className="cls border-[2px]" type="text" placeholder="Enter your last name" onChange={inputChange} name="lname"  value={fullname.lname}/>

        <button className=" px-[20px] focus:bg-green-600 py-[10px] bg-red-500"> Submit Text
<i className='fa fa-address-book  ml-[5px text-4xl text-slate-200' />
        <AiFillAudio/>
        </button>
        </div>
        </form>
        </>
    );
}

export default Form;