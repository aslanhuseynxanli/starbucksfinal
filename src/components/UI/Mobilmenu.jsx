import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {  IoLocationSharp } from 'react-icons/io5'
import { Dropdown } from 'react-bootstrap';

function Mobilmenu() {
  return (
   <div className='relative'>
     <div className='flex flex-col  absolute right-[-20px] top-[84px] h-[100vh] w-[80vw] bg-white space-y-5  p-4 shadow-md transition duration-200'>
    <div className='flex items-center '>
     
      <ul className='flex flex-col font-bold space-y-5 '>
        <Link to='/menu'>Menu
        <Dropdown>All products</Dropdown>
        <Dropdown ><Link to='/featured'>Featured</Link></Dropdown>
        <Dropdown ><Link to='/menu/previous'>Previous</Link></Dropdown>
        <Dropdown ><Link to='/menu/favorites'>Favorites</Link></Dropdown>
        
        </Link>
        <Link  to='/rewards'>Rewards</Link>
        <Link to='giftcard'> Gift cards</Link>
      </ul>
      
    </div>
    <div className=' font-[500] text-[15px]  space-y-5'>
       
      <NavLink to='signin'><button className='border-solid border-2 border-black rounded-3xl w-[100px] p-2 hover:color-900'>
        Sign in
      </button></NavLink>
     <NavLink to='loggin'> <button className='border-solid border-2 border-black rounded-3xl w-[100px] ml-6 p-2'>
        Join now
      </button></NavLink>
      <Link  className='flex items-center icon'>
          <IoLocationSharp className=' text-[30px] ' />
          <NavLink to='/location' > Find a store</NavLink>
        </Link>
    </div>

  </div>

   </div>
  
  )
}

export default Mobilmenu;