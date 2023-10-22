import React from 'react'

const Buttons = ({ label, iconUrl, backgroundColor, textColor, borderColor, fullWidth }) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat mr-3
    leading-none ${ backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : 'bg-coral-red  text-white border-coral-red'}  rounded-full ${fullWidth && 'w-full'}`}>
        {label}
        {iconUrl && <img src={iconUrl} alt="arrow right"
        className='ml-2 rounded-full w-5 h-5' />}
        
    </button>
  )
}

export default Buttons