import React from 'react'
import Logo from '../assets/LogoHeader.png'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios' 


const CaptainSignup = () => {
  
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState('')

    const [ vehicleColor, setVehicleColor ] = useState('')
    const [ vehiclePlate, setVehiclePlate ] = useState('')
    const [ vehicleCapacity, setVehicleCapacity ] = useState('')
    const [ vehicleType, setVehicleType ] = useState('')


    const { captain, setCaptain } = useContext(CaptainDataContext)      
  
    const submitHandler = async (e)=>{
      e.preventDefault();
      const captainData = {
        fullname: {
          firstname: firstName,
          lastname: lastName
        },
        email: email,
        password: password,
        vehicle: {
          color: vehicleColor,
          plate: vehiclePlate,
          capacity: vehicleCapacity,
          vehicleType: vehicleType
        }
      }
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

      if (response.status === 201) {
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('token', data.token)
        navigate('/captain-home')
      }
      setEmail('')
      setPassword('')
      setFirstName('')
      setLastName('')
      setVehicleColor('')
      setVehiclePlate('')
      setVehicleCapacity('')
      setVehicleType('')

    }
  return (
    <div className='bg-[#FFFDF6] p-5 px-5 h-screen flex flex-col justify-between'>
    <div>
    <img className=' w-20 mb-6' src = {Logo} alt='Uber Logo'/>
    <form onSubmit={(e)=>{submitHandler(e)}}>
      <h3 className='text-[#504B38] text-lg w-full font-medium mb-2'>Enter Your name</h3>
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
      className='bg-white mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
      value={password}
      onChange={(e) => {
        setPassword(e.target.value)
      }}
      equired type="password"
      placeholder='password'
    />

<h3 className='text-[#504B38] text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-whiite w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-white w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-white w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-[#FAF6E9] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option className='text-[#504B38]' value="" disabled>Select Vehicle Type</option>
              <option className='text-[#504B38]' value="car">Car</option>
              <option className='text-[#504B38]' value="auto">Auto</option>
              <option className='text-[#504B38]' value="moto">Moto</option>
            </select>
          </div>

    <button 
    className='bg-[#A0C878] text-black font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base' >
      Create Account
    </button>
    <p className='text-center'>Already have an account? <Link to='/captain-login'className='text-[#1c3a5d]'>Login here</Link></p>
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