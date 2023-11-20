import React from 'react'
import products from '../../assets/data/BestDevelopersProduct2.json'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Productscard from './Productscard';
import { nanoid } from 'nanoid';


function List() {
  const navi = useLocation();


  const data = [...new Set(products.products.map(item => item.subcategory))]
  let filterdata = [];
  for (let i = 0; i < data.length; i++) {
    filterdata.push(products.products.find(item => item.subcategory === data[i]));
  }
  return (
    <>

      <div className='w-[90%] mt-10 mx-auto'>
        <span className='hidden md:inline font-bold mx-2 my-7'>Drinks</span>
        <div className='flex'>

          <div className='hidden md:flex w-[15%]  flex-col space-y-5  mx-2'>   {
            data.map(item => <div>
              <Link key={nanoid()} to={item}>  {item}</Link>
              {/* <Productscard item={item} /> */}
            </div>)
          }</div>


          {
            navi.pathname === "/menu" ? (
              <div className=' m-10 w-[65%]  flex flex-wrap  justify-between items-center'>
                {filterdata.map(item => (
                  <Productscard key={nanoid()} {...item} />
                ))}
              </div>
            ) : (<Outlet />)
          }

        </div>

      </div>
    </>
  )
}

export default List