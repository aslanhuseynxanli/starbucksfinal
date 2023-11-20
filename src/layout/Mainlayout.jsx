import React from 'react'

import "../assets/style/font.css"
import "../assets/style/index.css"
import Navbarr from '../components/UI/Navbarr'
import { Outlet } from 'react-router-dom'
import Footer from '../components/UI/Footer'
import MobileFooter from '../components/UI/MobileFooter'

function Mainlayout() {
  return (
    <>
      <header className=''>
        <Navbarr />
      </header>
      <main >
        <Outlet />
      </main>
      <footer className='border-t-2 border-b-2'>
        <Footer />
        <MobileFooter />
      </footer>
    </>

  )
}

export default Mainlayout