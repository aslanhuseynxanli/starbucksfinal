import React from 'react'

function Homecard({id,color,img,title,desc,btn}) {
  return (
    <div className={`  sm:flex   ${id%2 ? "flex-row-reverse" :""} py-3 my-3`}>
       <div className=' w-[100%] sm:w-1/2' > <img src={img} alt="" /> </div>
       <div className=' bg w-[100%] sm:w-1/2 flex flex-col justify-center gap-3 ' style={{backgroundColor: `${color}`}}>  
           <h1 className='text-3xl text-center  '>{title}</h1>
           <p className='w-[70%]  leading-10 mx-auto'>{desc}</p>
           <button className=' border-solid border-2  border-black rounded-3xl w-[200px] p-2  mx-auto'>{btn}</button>
         </div>
    </div>
  )
}

export default Homecard