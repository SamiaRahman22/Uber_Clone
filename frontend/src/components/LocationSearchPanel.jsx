import React from 'react'

const LocationSearchPanel = (props) => {
    console.log(props);

    {/*sample array for locations*/}
    const locations = [
        "24B, Near Kapoor's Cafe, Sheryians Coding School, Bhopal",
        "11F, Zee Market, English International School, Bhopal",
        "13A, Near Cafe Cloud, Loki Headquaters, Bhopal"
    ]
    return (
        <div>
            {/*this is a sample*/}
            {
                locations.map(function(element, idx){
                    return <div key={idx} onClick={()=>{
                        props.setvehiclePanel(true)
                        props.setPanelOpen(false)
                    }} className='flex gap-4 p-3 border-2 border-white active:border-black rounded-xl items-center my-2 justify-start'>
                    <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                    <h4 className='font-medium'>{element}</h4>
                </div>
                })
            }
            
        </div>
    )
}

export default LocationSearchPanel