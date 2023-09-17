import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <header className='flex justify-between'>
            <h1 className='text-4xl font-mono uppercase'><Link to="/">WIZBLOG</Link></h1>
            <nav className='flex gap-5'>
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </nav>
        </header>
    </div>
  )
}

export default Header