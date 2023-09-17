import React from 'react'

const Header = () => {
  return (
    <div>
        <header className='flex justify-between'>
            <h1 className='text-4xl font-mono uppercase'>WIZBLOG</h1>
            <nav className='flex gap-5'>
                <a href="">Login</a>
                <a href="/register">Register</a>
            </nav>
        </header>
    </div>
  )
}

export default Header