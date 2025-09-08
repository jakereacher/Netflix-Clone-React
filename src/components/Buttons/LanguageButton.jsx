import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faCaretDown } from '@fortawesome/free-solid-svg-icons'

const LanguageButton = () => {
  return (
    <>
        <button className='border border-gray-400 font-medium px-3 py-[3px] mr-3 rounded-full'><FontAwesomeIcon icon={faGlobe} /> English <FontAwesomeIcon icon={faCaretDown} className='ml-1' /></button>
    </>
  )
}

export default LanguageButton