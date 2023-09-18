import React from 'react'
import { useState } from 'react'
import axios from "axios"

const Register = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await axios.post('http://localhost:4001/register', {
        name,
        password,
      }, {
        headers: { 'Content-Type': 'application/json' },
      });
      if(response.status === 200){
        alert("registration successfull")
      }else{
        alert("registration failed")
      }
    };
    

    
  return (
    <div className='h-[100vh] mx-auto '>
        <form onSubmit={handleSubmit} className="flex flex-col w-[600px] mx-auto ">
            <div className='flex flex-col mt-20'>
            <label htmlFor="name" className='font-mono text-xl'>name</label>
            <input type="text" value={name} id='name'  onChange={(e)=>setName(e.target.value)} className='bg-blue-300 w-[200px] h-[30px] '/>
            </div>
            <div className='flex flex-col mt-6'>
             <label htmlFor="password" className='font-mono text-xl'>password</label>
            <input type="text" value={password}  id='password' onChange={(e)=>setPassword(e.target.value)} className='bg-blue-300 w-[200px]'/>
            </div>
            <button className='mt-5 bg-black text-white w-[200px] p-3 rounded-md'>submit</button>
        </form>
    </div>
  )
}

export default Register;