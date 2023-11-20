import React from 'react'
import data from '../../assets/data/featureddata.json'
import { Link } from 'react-router-dom'
function Featured() {
  return (
    <>
    <p className='font-[700] text-[50px] text-center my-5 '>Cue spring mood</p>
      <div className='sm:flex flex-wrap justify-between ' >
       {
        data.products.map(item => 
        <div className='w-[100%] sm:w-[49%] mb-5 ' style={{background:`${item.color}`}}>
           <img  src={item.img} alt="" />
           <div className='text-center py-5 w-[70%] mx-auto ' >
           <p className='font-[600] text-[24px]'>{item.title}</p>
           <p className='my-5 text-[18px]'>{item.text}</p>
           <button className='border-black border-2 rounded-full py-1 px-3'><Link>Order now</Link></button>
           </div>
        </div>)
       }
    </div>
    </>
  
  )
}

export default Featured