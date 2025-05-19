import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/LogoHeader.png'

const Start = () => {
  return (
    <div>
        <div className='bg-cover bg-bottom bg-[url(https://images.unsplash.com/photo-1634743556192-d19f0c69ff3a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full'>
            <img className='w-20 h-15 ml-8' src = {Logo} alt='Uber Logo'/>
            <div className = 'bg-white pb-7 py-4 px-4'>
                <h2 className='text-[30px] font-bold'> Get Started with Jatri</h2>
                <Link to='/login' className='flex items-center justify-center  w-full bg-black text-white py-3 rounded mt-5'> Continue</Link>
            </div>

        </div>
    </div>
  )
}

export default Start  