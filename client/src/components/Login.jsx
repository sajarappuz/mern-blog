import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

const Login = () => {
      
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:4001/login', {
                name,
                password,
              }, {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true, // Include credentials
              });
        if (response.ok) {
            
            navigate('/')
          } else {
            // Login failed
           alert("login unsuccessfull")
          }
        } catch (err) {
           console.log(err)
          alert("fetching failed")

        }
    }


  return (
    <div>
        <form onSubmit={handleSubmit} className="flex flex-col w-[600px]  ">
            <div className='flex flex-col mt-20'>
            <label htmlFor='name' className='font-mono text-xl'>name</label>
            <input type="text" value={name} id='name'  onChange={(e)=>setName(e.target.value)} className='bg-blue-300 w-[200px] h-[30px] '/>
            </div>
            <div className='flex flex-col mt-6'>
             <label htmlFor='password' className='font-mono text-xl'>password</label>
            <input type="text" value={password} id='password'  onChange={(e)=>setPassword(e.target.value)} className='bg-blue-300 w-[200px]'/>
            </div>
            <button className='mt-5 bg-black text-white w-[200px] p-3 rounded-md'>submit</button>
        </form>
    </div>
  )
}

export default Login