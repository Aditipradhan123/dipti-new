import React from 'react'
import { Link } from 'react-router-dom'
import { FaChevronRight, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { IoIosMail, IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
    return (
        <>
            <div className='flex bg-black text-white justify-between md:p-5 p-2'>
                <div className='text-xl md:ml-6 ml-2'>
                    <Link className="" to="/">Dipti Eyebrow Threading</Link>
                </div>
                <div className='mt-3 font-bold'>
                    <Link className="md:mr-16 mr-3" to="/">HOME</Link>
                    <Link className="md:mr-8" to="/about">ABOUT US</Link>
                    <Link className="md:mr-16 mr-3" to="/giftcard">GIFT CARD</Link>
                    <Link className="md:mr-8" to="/services">SERVICES</Link>
                    <Link className="md:mr-8" to="/contact">CONTACT US</Link>
                    <Link className="md:mr-8" to="/gallary">GALLARY</Link>
                    
                <div className='flex flex-col border-t'>
                </div>
                    <ul className='flex justify-end space-x-2 m-4'>
                        <li className='hover:text-blue-500'>
                            <IoLogoInstagram size={30} />
                        </li>
                        <li className='hover:text-blue-500'>
                            <IoLogoFacebook size={30} />
                        </li>
                        <li className='hover:text-blue-500'>
                            <IoLogoTwitter size={30} />
                        </li>
                        <li className='hover:text-blue-500'>
                            <IoLogoLinkedin size={30} />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer