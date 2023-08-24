import React from 'react'

const CoverageBox = ({ image, text, onClick }) => {
  return (
    <div onClick={onClick} className='flex flex-col rounded bg-white shadow-lg cursor-pointer hover:transition-all hover:scale-105'>
      <img src={image} alt="coverageimg" />
      <span className='px-3 py-5'>{text}</span>
    </div>
  )
}

export default CoverageBox
