import React from 'react'
import { Link } from 'react-router-dom'

const FinishRide = (props) => {
  return (
    <div>
        <h5 onClick={()=>{
          props.setFinishRidePanel(false)
        }} className='p-1 text-center w-[93%] absolute top-0 '><i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i></h5>
        <h3 className='font-semibold text-2xl mb-5'> Finish this Ride. </h3>

        <div className='flex items-center justify-between p-4 border-2 border-[#DDEB9D] rounded-lg mt-4'>
                <div className='flex items-center gap-3 '>
                    <img className='h-12 rounded-full object-cover w-12' src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg" alt="" />
                    <h2 className='text-lg font-medium'>Sam</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.2 KM</h5>
            </div>

        <div className='flex gap-2 flex-col justify-between items-center'>
            <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Niketan, Gulshan</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Banasree</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>$20.67</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>
                <div mt-6 w-full>
                    <Link to = '/captain-home' 
                    className='w-full mt-5 flex text-lg justify-center bg-green-600 text-white font-semibold p-3 rounded-lg' >Finish Ride</Link>
                    <p className='text-red-500 text-xs mt-6' >Click on Finish Ride button if you have completed the payment.</p>
                </div>
        </div>
    </div>
  )
}

export default FinishRide