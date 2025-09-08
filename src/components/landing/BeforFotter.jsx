import React from 'react'
import RedButton from '../Buttons/RedButton'

const BeforFotter = () => {
  return (
    <div className='px-60'>
        <p className='text-center mb-2 mt-10'>Ready to watch? Enter your email to create or restart your membership.</p>
       <div className='flex gap-2 px-16'>
       <input
              className="bg-gray-400/50 text-gray-300 border border-gray-400 sm:hidden lg:block p-4 rounded-full flex-1"
              type="text"
              placeholder="Email address"
            />
        <RedButton name={"Get Started"} />
       </div>
    </div>
  )
}

export default BeforFotter