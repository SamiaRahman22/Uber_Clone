import React from 'react'

const LocationSearchPanel = (props) => {
    return (
        <div>
            {
                props.suggestions.map((element, idx) => {
                    return (
                        <div 
                          key={idx} 
                          onClick={() => {
                            props.handleSuggestionClick(element)
                          }} 
                          className='flex gap-4 p-3 border-2 border-white active:border-black rounded-xl items-center my-2 justify-start'
                        >
                            <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'>
                              <i className="ri-map-pin-fill"></i>
                            </h2>
                            <h4 className='font-medium'>{element}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default LocationSearchPanel