import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { RiHomeFill } from 'react-icons/ri'
import { IoIosArrowforward } from 'react-icons/io'

import logo from '../asset/logo.png'

const isActiveStyle = 'flex item-center px- gap-3 font-extrabold border-r-2 bordar-black transition-all duration-200 ease-in-out capitalize'
const isNotActiveStyle = 'flex item-center px- gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize'

const category = [
  { name: 'Animals' },
  { name: 'Wallpaper' },
  { name: 'Photography' },
  { name: 'Gameing' },
  { name: 'Coding' }
]

const Sidebar = ({ user, closeToggle }) => {
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  }

  return (
    <div className='flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210px'>
      <div className='flex flex-col'>
        <Link to="/" className='flex px-5 gap-2 my-6 pt-1 w-190 items-center' onClick={handleCloseSidebar}>
          <img src={logo} alt="logo" className='w-full' />
        </Link>
        <div className='flex flex-col gap-5'>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}
            onClick={handleCloseSidebar}
          >
            <RiHomeFill />
            Home
          </NavLink>
          <h3 className='mt-2 px-5 text-base 2xl:text-xl'>Discover category</h3>
          {category.slice(0, category.length - 1).map((category) => (
            <NavLink
              to={`/category/${category.name}`} className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}
              onClick={handleCloseSidebar}
              key={category.name}>
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>
      {user && (
        <Link
          to={`user-profile/${user._id}`}
          className="flex my-5 mb-3 gap-2 p-2 item-center bg- white rounded-lg shadow-lg mx-3"
        >
          <img src={user.image} alt="img" className='w-10 h-10 rounded-full'/>
          <p>{user.username}</p>
        </Link>
      )}
    </div>
  )
}

export default Sidebar