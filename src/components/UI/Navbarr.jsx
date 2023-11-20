
import logo from '../../assets/img/starbuckslogo.jpeg'
import { Link, NavLink } from 'react-router-dom'
import {  IoLocationSharp } from 'react-icons/io5'
import Mobilmenu from './Mobilmenu'
import { useState } from 'react'



function Navbarr() {


  const [show,setShow] = useState(true) 

  const deyis=()=>{
    setShow(!show )
   }
 

  return (
<div className=' flex  justify-between p-4 shadow-md'>
      <div className= '  flex items-center justify-between '>
        <NavLink to='/'>
          <img className='w-[100px]' src={logo} alt='' />
        </NavLink>
        <ul className='hidden sm:flex space-x-5 font-bold '>
          <NavLink to='/menu'>Menu</NavLink>
          <NavLink  to='/rewards'>Rewards</NavLink>
          <NavLink to='giftcard'> Gift cards</NavLink>
        </ul>
       <div>
       <button onClick={deyis} className=' initial sm:hidden '>OK</button>
       </div>
      </div>
      <div className=' hidden sm:flex justify-between items-center space-x-5 font-[500] text-[15px]'>
          <Link  className='flex items-center icon'>
            <IoLocationSharp className=' text-[30px] ' />
            <NavLink to='/location' > Find a store</NavLink>
          </Link>
          <NavLink to='/signin'>   <button className='border-solid border-2 border-black rounded-3xl w-[100px] p-2 hover:color-900'>
          Sign in 
        </button></NavLink>
        <NavLink to='/loggin'> <button className='border-solid border-2 border-black rounded-3xl w-[100px] p-2'>
         Log in
        </button></NavLink>
      </div>
      {/* <button className='border-2 flex md:hidden' onClick={ deyis} >OK</button> */}
      <div className={`sm:hidden ${show ? "overflow-hidden" : ""} z-20`}>
        <Mobilmenu />
      </div>
    </div>
    

  )
}

export default Navbarr
