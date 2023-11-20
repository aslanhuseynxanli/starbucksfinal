import React from 'react'
import { NavLink } from 'react-router-dom'


function Menuheader() {


  return (
    <div className= ' hidden md:flex w-[90%] text-black py-3  mx-auto mh-y space-x-6'>
        <NavLink  to='/menu'>All Products</NavLink>
        <NavLink to='/featured'>Featured</NavLink>
        <NavLink  to='/menu/previous'>Previous Orders</NavLink>
        <NavLink to='/menu/favorites'>Favorite Products</NavLink>
    </div>
  )
}

export default Menuheader