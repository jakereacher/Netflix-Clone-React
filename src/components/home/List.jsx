import React from 'react'

const List = ({ user }) => {

    const lists = ["Home", "TV Shows", "Movies", "New & Popular", "Browser by Languages"]
  return (
    <>
        {user ? <div className='flex gap-6 font-semibold'> {lists.map((item, i) => (
            <ul key={i} className='cursor-pointer hover:text-gray-500' >
                <li>{item}</li>
            </ul>
        ))} </div>: <></>}
    </>
  )
}

export default List