import React from 'react'
import MainButton from './Buttons/MainButton'
import LanguageButton from './Buttons/LanguageButton'
import List from './home/List';
import UserInfo from './home/UserInfo';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { user } = useUser()

  const navigate = useNavigate()

  return (
    <header className='py-5 mx-[18px] lg:mx-[40px] mr-[36px] flex justify-between z-20 relative'>
        <div className='flex gap-12 items-center'>
        <img onClick={() =>  navigate("/")} className='w-[164px] h-[40px] pl-[16px] cursor-pointer' src="/Netflix-logo.png" alt="" />
        <List user={user} />
        </div>
        <div className='flex'>


        
       {user ? <><UserInfo /> </> : <><LanguageButton />  
        <MainButton name={"Sign In"} /></>}
       
        </div>
    </header>
  )
}

export default Navbar