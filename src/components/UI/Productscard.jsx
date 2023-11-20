import React from 'react'
import { Link, useParams } from 'react-router-dom'


function Productscard({img,subcategory }) {
  const {subcat} = useParams()
  return (
    
  
  
    <Link to={subcat} >
       <div className='ml-20 m-3 flex items-center'>
        <img className='w-[120px] rounded-full object-cover' src={img} alt="" />
        <h3 className='text-center  ml-5 font-serif font-[500] '>
            {subcategory}
        </h3>
       </div>
    </Link>
  )
}

export default Productscard