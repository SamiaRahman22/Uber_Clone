import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const CaptainSignup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState('')
  
    const submitHandler = (e)=>{
      e.preventDefault();
      setUserData({
        username:
        { 
          firstName: firstName,
          lastName: lastName
        },
        email: email,
        password: password
      })
      setEmail('')
      setPassword('')
      setFirstName('')
      setLastName('')
    }
  return (
    <div className='p-5 px-5 h-screen flex flex-col justify-between'>
    <div>
    <img className='w-20 mb-2' src = 'https://www.svgrepo.com/show/505031/uber-driver.svg' alt='Uber Logo'/>
    <form onSubmit={(e)=>{submitHandler(e)}}>
      <h3 className='text-lg font-medium mb-2'>Enter Your name</h3>
      <div className='flex gap-4 mb-6'>
        <input 
          required 
          className='bg-[#eeee] w-50% rounded px-4 py-2 border w-full text-lg placeholder:text-base'
          type="text" 
          placeholder='First name' 
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input 
          required 
          className='bg-[#eeee] w-50% rounded px-4 py-2 border w-full text-lg placeholder:text-base'
          type="text" 
          placeholder='Last name' 
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
    <h3 className='text-lg font-medium mb-2'>What's your email</h3>
    <input 
    required 
    className='bg-[#eeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
    type="email" 
    placeholder='email@example.com' 
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    />

    <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

    <input 
    required
    className='bg-[#eeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
    type="password" 
    placeholder='password'
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    />
    <button 
    className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base' >
      Login
    </button>
    <p className='text-center'>Already have an account? <Link to='/captain-login'className='text-purple-600'>Login here</Link></p>
    </form>
    </div>
      <div>
        <p className='text-[10px] mt-6 leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
          Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
  </div>
  )
}

export default CaptainSignup