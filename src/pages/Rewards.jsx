import React from 'react'
import Rewardsdata from '../components/UI/Rewardsdata'
// import data from '../assets/data/featureddata.json'



function Rewards() {
  
  return (
    <div>
      <div className='h-[50px] bg-[#1E3932]  flex items-center flex-nowrap justify-between text-[#FFF] p-3 sticky top-0 left-0 right-0 z-10'>
        <p className=' text-[13px] md:text-[20px] px-10'>STARBUCKS® REWARDS</p>
        <button className=' text-[13px]  md:text-[20px] inline md:hidden border-[1px] rounded-full text-white  px-3'>Join in the app</button>
      </div>
      <div className='flex   flex-col md:flex-row justify-between  h-[90vh] overflow-hidden bg-[#D4E8E2]'>
        <div className=' relative'>
          <div className='  absolute m-auto w-[250px]  text-center left-10 md:top-48 '>
            <p className='font-[500] text-[35px] '>FREE COFFEE IS A TAP AWAY</p>
            <p className=' w-[300px] font-[100] text-[20px] '>Join now to start earning Rewards.</p>
            <button className="border-2  right-0 rounded-full bg-[#258159] text-white m-2 py-1 px-3">Join now</button>

          </div>
        </div>
        <div className='relative'>
          <img className='h-[300px] sm:h-[600px] md:h-[100%] object-cover' src='https://www.starbucks.com/weblx/images/rewards/hero/xl-hero-desktop_2021.png' alt='' />
        </div>
      </div>
      
      <div className=' w-[80%]  m-auto '>
        <div className=' text-center  pt-28 pb-20' >
          <h2 className='font-[500] m-3 text-[30px]'>Getting started is easy</h2>
          <p className='font-[300]'>Earn Stars and get rewarded in a few easy steps.</p>
        </div>
        <div className='flex flex-col md:flex-row  '>
          <div className='flex items-center justify-center gap-3 md:inline '>
            <span className='border-2 border-[#01623D] text-[30px] text-center flex items-center justify-center h-[40px] md:h-[60px] w-[100px] md:w-[60px] m-auto rounded-full text-[#01623D]'>1</span>
            <div className='text-center my-7'>
              <p className='font-bold my-3 '>Create an account</p>
              <p >Join in the app to get access to the full range of Starbucks® Rewards benefits. You can also join online.</p>
            </div>
          </div>
          <div className='flex gap-3 md:inline md:mx-10 '>
            <p className='border-2 border-[#01623D] text-[30px] text-center flex items-center justify-center h-[40px] md:h-[60px] w-[120px] md:w-[60px] m-auto rounded-full text-[#01623D]'>2</p>
            <div className='text-center my-7'>
              <p className='font-bold my-3'>Order and pay how you’d like</p>
              <p>Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. Learn how</p>
            </div>
          </div>
          <div className='flex gap-3 md:inline'>
            <p className='border-2 border-[#01623D] text-[30px] text-center flex items-center justify-center  h-[40px] md:h-[60px] w-[130px] md:w-[60px] m-auto rounded-full text-[#01623D]'>3</p>
            <div className='text-center my-7'>
              <p className='font-bold my-3'>Earn Stars, get Rewards</p>
              <p className=''>As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!</p>
            </div>
          </div>
        </div>
      </div>
      <div >

        <Rewardsdata />
        
      </div>
     
    </div>
  )
}


export default Rewards