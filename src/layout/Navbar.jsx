import React from 'react'
import logo from '../assets/images/logo.jpg';
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <nav className='sticky w-full top-0 bg-white z-10 "'>
        <div className='flex justify-between md:p-5 p-2'>
          <div className='text-xl md:ml-6 ml-2'>
            <Link className="" to="/">
              <img alt='' src={logo} className='demo-logo'/>
            </Link>
          </div>
          <div className='mt-3 font-bold'>
            <Link className="md:mr-16 mr-3" to="/">HOME</Link>
            <Link className="md:mr-8" to="/about">ABOUT US</Link>
            <Link className="md:mr-16 mr-3" to="/giftcard">GIFT CARD</Link>
            <Link className="md:mr-8" to="/services">SERVICES</Link>
            <Link className="md:mr-8" to="/contact">CONTACT US</Link>
            <Link className="md:mr-8" to="/gallary">GALLARY</Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar