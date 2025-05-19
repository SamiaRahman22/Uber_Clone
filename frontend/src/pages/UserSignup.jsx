import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState,useContext} from 'react'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'
import Logo from '../assets/LogoHeader.png'

const UserSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  //const [userData, setUserData] = useState('')


  const navigate = useNavigate()

  const { user, setUser } = useContext(UserDataContext)


  const submitHandler = async (e)=>{
    e.preventDefault();
    const newUser = {
      fullname:
        { 
          firstname: firstName,
          lastname: lastName
        },
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)
    
    if (response.status === 201){
      const data = response.data
      setUser(data.user)
      navigate('/home')
    }


    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
  }
  return (
    <div className='bg-[#FFFDF6] p-7 h-screen flex flex-col justify-between'>
    <div>
    <img className='w-25 h-20 mb-8' src = {Logo} alt='Uber Logo'/>
    <form onSubmit={(e)=>{submitHandler(e)}}>
      <h3 className='text-[#504B38] text-lg font-medium mb-2'>Enter Your name</h3>
      <div className='flex gap-4 mb-6'>
        <input 
          required 
          className='bg-white w-50% rounded px-4 py-2 border w-full text-lg placeholder:text-base'
          type="text" 
          placeholder='First name' 
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input 
          required 
          className='bg-white w-50% rounded px-4 py-2 border w-full text-lg placeholder:text-base'
          type="text" 
          placeholder='Last name' 
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
    <h3 className='text-[#504B38] text-lg font-medium mb-2'>What's your email</h3>
    <input 
    required 
    className='bg-white mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
    type="email" 
    placeholder='email@example.com' 
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    />

    <h3 className='text-[#504B38] text-lg font-medium mb-2'>Enter Password</h3>

    <input 
    required
    className='bg-white mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
    type="password" 
    placeholder='password'
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    />
    <button 
    className='bg-[#A0C878] text-[#504B38] font-bold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base' >
      Create Account
    </button>
    <p className='text-center'>Already have an account? <Link to='/login'className='text-[#1c3a5d]'>Login here</Link></p>
    </form>
    </div>
    <div>
      <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
        Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
    </div>
    </div>
  )
}

export default UserSignup