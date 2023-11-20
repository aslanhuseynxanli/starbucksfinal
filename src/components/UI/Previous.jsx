import React from 'react'

function Previous() {
  return (
    <div className='mx-14 py-10 '>
        <p className='font-bold text-[25px]  '>Previous Order</p>
        <img src="https://www.starbucks.com/weblx/images/moon-phases.gif" alt="" />
        <p className='font-[400] w-[320px] text-[35px]'>When history repeats itself</p>
        <p className='font-[330] text-[20px] w-[280px]'>Previous orders will appear here to quickly order again.</p>
        <button className='px-7 py-2 border-2 border-black rounded-full '>Sign in</button>
        <button  className='px-7 py-2 m-3 bg-black text-white  border-2 border-black rounded-full '>Join now</button>
    </div>
  )
}

export default Previous