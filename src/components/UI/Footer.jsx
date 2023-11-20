import React from 'react'

function Footer() {
  return (
    <div className='hidden md:flex md:space-x-20 m-10 w-[80%] m-auto  justify-around   '>
        <ul className='  md:space-y-6'> 
        <h3 className='md:text-[20px]'>About us </h3>
            <li>Our Company</li>
            <li>Our Coffe</li>
            <li>Stories and News</li>
            <li>Starbucks Archive</li>
            <li>Investor Relations</li>
            <li>Customer Services</li>
        </ul>
        <ul  className='  md:space-y-6'><h3 className='md:text-[30px]'>Careers </h3>
            <li> Culture and Values</li>
            <li>Inclusion, Diversity, and Equity</li>
            <li>College Achievement Plan</li>
            <li>Alumni Community</li>
            <li>U.S. Careers</li>
            <li>International Careers</li>
        </ul>
        <ul  className=' md:space-y-6'><h3 className='md:text-[30px]'>  Social Impact </h3>
            <li> People</li>
            <li>Planet</li>
            <li>Environmental and Social Impact Reporting</li>
        </ul>
        <ul  className='  md:space-y-6'><h3 className='md:text-[30px]'>For Business Partners </h3>
            <li> Landlord Support Center</li>
            <li>Suppliers</li>
            <li>Corporate Gift Card Sales</li>
            <li>Office and Foodservice Coffee</li>
            
        </ul>
        
        <ul  className=' text-[13px]  md:space-y-6'>
        <h3 className=' text-[20px] md:text-[30px]'>  Order and Pickup </h3>
            <li> Order on the App</li>
            <li>Order on the Web</li>
            <li>Delivery</li>
            <li>Order and Pickup Options</li>
            <li>Explore and Find Coffee for Home</li>
            
        </ul>


    </div>
  )
}

export default Footer