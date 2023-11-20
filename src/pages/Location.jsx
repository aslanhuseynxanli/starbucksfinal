import { TextField } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Location() {
  return (
    <div className='md:flex p-5 h-[100vh] m-0 '>
      <div className='basis-[40%]'>
        <div className='flex items-center'>
          <TextField className='w-[400px]' id="standard-basic" label="Find a store" variant="standard" />
          <button className='border-[1px] border-[#01754A] text-[#01754A] rounded-full px-5 py-1' >Filter</button>
        </div>
        <div className='h-[500px] py-16 '>
          <p className='text-[28px]'>We are unable to access your exact location</p>
          <p className='py-10 text-[#686868] '>To find a Starbucks store, use the search feature, navigate using the map, or turn on location services.</p>
        </div>
        <div className='text-[#01754A]'>
          <NavLink><p>Privacy Notice opens in new window</p></NavLink>
          <NavLink><p className='py-2'>Terms of Use opens in new window</p></NavLink>
          <NavLink><p>Do Not Share My Personal Information opens in new window</p></NavLink>
        </div>
      </div>
      <div className='basis-[60%]'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3122841.8971151705!2d45.11445876721265!3d40.15007293038535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307cd91aa21ddf%3A0xe6c9526b3e83cd08!2sAzerbaycan!5e0!3m2!1str!2saz!4v1684913466942!5m2!1str!2saz" className=' w-full h-[50vh] sm:h-full ' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default Location