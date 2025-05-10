import React from 'react'

const VehiclePanel = (props) => {
  console.log(props)
  return (
    <div>
      <h5 onClick={()=>{
          props.setvehiclePanel(false)
        }} className='p-1 text-center w-[93%] absolute top-0 '><i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i></h5>
      <h3 className='font-semibold text-2xl mb-5'>Choose a vehicle</h3>
      <div onClick={()=>{
        props.setconfirmRidePanel(true)
      }} className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
        <img className='h-12' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
        <div className='w-1/2'>
          <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i> 4 </span></h4>
          <h5 className='font-medium text-sm'> 2 mins away </h5>
          <p className='font-normal text-xs text-gray-600'>Affordaable, Compact rides</p>
        </div>
        <h2 className='font-semibold text-xl'>$20.67</h2>
      </div> 
      <div onClick={()=>{
        props.setconfirmRidePanel(true)
      }} className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
        <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png" alt="" />
        <div className='w-1/2'>
          <h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-fill"></i> 1 </span></h4>
          <h5 className='font-medium text-sm'> 3 mins away </h5>
          <p className='font-normal text-xs text-gray-600'>Affordaable, motorcycle rides</p>
        </div>
        <h2 className='font-semibold text-xl'>$8.35</h2>
      </div> 
      <div onClick={()=>{
        props.setconfirmRidePanel(true)
      }} className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
        <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
        <div className='w-1/2'>
          <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-3-fill"></i> 3 </span></h4>
          <h5 className='font-medium text-sm'> 5 mins away </h5>
          <p className='font-normal text-xs text-gray-600'>Affordaable auto rides</p>
        </div>
        <h2 className='font-semibold text-xl'>$10.11</h2>
      </div> 
    </div>
  )
}

export default VehiclePanel