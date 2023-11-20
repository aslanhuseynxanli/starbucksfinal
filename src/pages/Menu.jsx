import React from 'react'
import { Outlet } from 'react-router-dom'

import Menuheader from '../components/UI/Menuheader'

function Menu() {
  return (
   <>

     <div className='bg-[#F9F9F9] border-b-2 border-t-2' >
      <Menuheader />
     </div>
      <Outlet />
  
   </>
  )


}

export default Menu