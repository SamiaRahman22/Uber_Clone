import React, { useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Logo from '../assets/LogoHeader.png'

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const[userData, setUserData] = useState({})

  const { user, setUser } = useContext(UserDataContext)
  const navigate = useNavigate()



  const submitHandler = async (e)=>{
    e.preventDefault();
    const userData ={
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)
    
    if (response.status === 200){
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }

    setEmail('')
    setPassword('')
  }
  
  
  return (
    <div className='bg-[#FFFDF6] p-7 h-screen flex flex-col justify-between'>
      <div>
      <img className='w-25 h-20 mb-8' src = {Logo} alt='Uber Logo'/>
      <form onSubmit={(e)=>{submitHandler(e)}}>
      <h3 className='text-lg font-medium mb-2'>What's your email</h3>
      <input 
      required 
      value={email}
      onChange={(e) => 
      setEmail(e.target.value)}
      className='bg-white mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
      type="email" 
      placeholder='email@example.com' 
      />

      <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

      <input 
      required
      value={password}
      onChange={(e) => 
      setPassword(e.target.value)}
      className='bg-white mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
      type="password" 
      placeholder='password'
      />
      <button 
      className='bg-[#092278] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base' >
        Login
      </button>
      <p className='text-center'>New Here? <Link to='/signup'className='text-[#092278]'>Create New Account</Link></p>
      </form>
      </div>
      <div>
      <Link to='/captain-login'
       className='bg-[#927550] flex items-center justify-center text-[#F8F3D9] font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base' >
        Sign in as Captain
        </Link>

      </div>
    </div>
  )
}

export default UserLogin