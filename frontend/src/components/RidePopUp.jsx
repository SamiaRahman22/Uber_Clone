import React from 'react'

const RidePopUp = (props) => {
  return (
    <div>
        <h5 onClick={()=>{
          props.setRidePopupPanel(false)
        }} className='p-1 text-center w-[93%] absolute top-0 '><i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i></h5>
        <h3 className='font-semibold text-2xl mb-5'> New Ride Available </h3>

        <div className='flex items-center justify-between p-3 bg-[#DDEB9D] rounded-lg mt-4'>
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
                <div className='flex mt-5 w-full items-center justify-between'>
                    <button onClick={()=>{
                        props.setRidePopupPanel(false)
                    }} className='w-full mt-1 bg-gray-200 text-gray-700 font-semibold p-3 px-10 rounded-lg' >Ignore</button>
                    <button onClick={()=>{
                        props.setConfirmRidePopupPanel(true)
                    }} className='w-full bg-[#504B38] text-white font-semibold p-3 px-10 rounded-lg' >Accept</button>
                    
                </div> 
        </div>
    </div>
  )
}

export default RidePopUp