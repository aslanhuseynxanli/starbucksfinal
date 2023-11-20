import React from 'react'
import logo from '../../assets/img/starbuckslogo.jpeg'

import { NavLink } from 'react-router-dom'
import { Checkbox,  TextField } from '@mui/material'




function Signin() {

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <div>

      <div className=' flex  justify-between p-4 shadow-md'>
        <div className='  flex items-center justify-between '>
          <NavLink to='/'>
            <img className='w-[100px]' src={logo} alt='' />
          </NavLink>

        </div>



      </div>

      <h3 className='p-5 text-center text-[25px]'>Sign in or create an account</h3>
      <div className='text-center sm:p-5  rounded-[10px] shadow-md max-w-[600px] m-auto'>
        <p>  * indicates required field</p>

        <div className='p-5 '>

          <div className='p-5'>
            <TextField
              className='sm:w-[400px]'
              id="outlined-multiline-flexible"
              label="Username or email address"
              multiline
              maxRows={4}
            />
          </div>
          <div>
            <TextField
              className='sm:w-[400px]'
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
          </div>
        </div>
        <div className='flex w-[400px] m-auto items-center py-5'>
          <Checkbox {...label} defaultChecked color="success" />
          <p>Keep me signed in</p>
        </div>
       <div className=' w-[350px] p-3'>
       <p>Forgot your username?</p>
        <p>Forgot your password?</p>
       </div>
       <div>
        <button className='  border-[1px] bg-[#01754A] text-white rounded-full px-5 py-3'>Sign in</button>
       </div>

      </div>
     <div className='text-center p-20'>
     <h3>JOIN STARBUCKS® REWARDS</h3>
     <p className='max-w-[350px] m-auto  py-3'>Join Starbucks® Rewards to earn free food and drinks, get free refills, pay and order with your phone, and more.</p>
     <NavLink to='/loggin'><button className=' border-solid border-2 text-[#01754A]  border-[#01754A] rounded-3xl w-[200px] p-2  mx-auto'>Join now</button></NavLink>
     </div>
    </div>
    

  )
}

export default Signin