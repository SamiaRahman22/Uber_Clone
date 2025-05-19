import React from 'react'
import { Link } from 'react-router-dom' 
import { useState } from 'react'
import { useRef } from 'react'
import FinishRide from '../components/FinishRide'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Logo from '../assets/LogoHeader.png'


const CaptainRiding = () => {
    
    const [ finishRidePanel, setFinishRidePanel ] = useState(false)
    const finishRidePanelRef = useRef(null)

    useGSAP(function () {
        if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ finishRidePanel ])

  return (
    <div className='h-screen relative flex flex-col justify-end'>

            <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
                <img className='w-25 h-20' src={Logo} alt="" />
                <Link to='/captain-home' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                    <i className='text-lg font-medium ri-logout-box-r-line'></i>
                </Link>
            </div>
            <div className='h-4/5'>
                <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>
    
            <div className='h-1/5 p-6 flex items-center justify-between relative bg-[#F8F3D9] pt-10' 
            onClick={()=> {
                setFinishRidePanel(true)
            }}
            >
                <h5 onClick={()=>{

                }} className='p-1 text-center w-[90%] absolute top-0 '><i className="text-3xl text-gray-400 ri-arrow-up-wide-line"></i></h5>
                <h4 className='text-xl font-semibold'>{'4 KM away'}</h4>
                <button className=' bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
            </div>
            <div ref={finishRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-12 bg-white'>
              < FinishRide setFinishRidePanel={setFinishRidePanel} />
            </div>
    </div>
  )
}

export default CaptainRiding