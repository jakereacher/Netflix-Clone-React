import React from 'react'
import { useNavigate } from 'react-router-dom'

const MainButton = ({ name }) => {

  const navigate = useNavigate()
  
  return (
    <>
         <button onClick={() => navigate("/login")} className='bg-white text-black font-medium px-3 py-[3px] rounded-full'>{name}</button>
    </>
  )
}

export default MainButton