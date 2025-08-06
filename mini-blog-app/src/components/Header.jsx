import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between  py-4 px-8 bg-blue-500 text-white'>
        <h1 className='font-bold text-xl'>Mini Blog</h1>
        <ul className="menus flex gap-10 font-semibold">
            <li>Home</li>
            <li>Create Blog</li>
        </ul>
    </div>
  )
}

export default Header