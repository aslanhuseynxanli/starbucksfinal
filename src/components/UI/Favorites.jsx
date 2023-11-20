import React from 'react'

function Favorites() {
  return (
    <div className='mx-20 py-10 '>
        <p className='font-bold text-[25px]  '>Favorite Products</p>
        <img className='w-[200px]' src="https://www.starbucks.com/weblx/images/fav-tapes.png" alt="" />
        <p className='font-[400] w-[320px] text-[35px]'>Save your favorite mixes</p>
        <p className='font-[330] text-[20px] w-[280px]'>Use the heart to save customizations. Your favorites will appear here to order again.</p>
        <button className='px-7 py-2 border-2 border-black rounded-full '>Sign in</button>
        <button  className='px-7 py-2 m-3 bg-black text-white  border-2 border-black rounded-full '>Join now</button>
    </div>
  )
}

export default Favorites