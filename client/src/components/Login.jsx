import React from 'react'
import { useState } from 'react'

const Login = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit =() =>{
    
        console.log(name)
        console.log(password)
    }


    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>name</label>
            <input type="text"  onChange={(e)=>setName(e.target.value)}/>
             <label>password</label>
            <input type="text"  onChange={(e)=>setPassword(e.target.value)}/>
            <button>submit</button>
        </form>
    </div>
  )
}

export default Login