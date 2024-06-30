import React from 'react'

const About = () => {
  return (
    <>
     <div className="body_mid h-auto bg-white w-full md:p-9  lg:flex lg:justify-between ">
                <div className="left lg:w-1/2 md:w-full sm:w-full" data-aos="fade-up" data-aos-duration="2000">
                    <h1 className="lg:text-4xl text-3xl font-bold md:p-5 p-3">About Us</h1>
                    <h2>A Few Words About Us Passion, experience and a fierce commitment to education are the cornerstones of our success in the beauty industry </h2>
                    <p className="lg:p-12 lg:text-xl lg:w-full md:text-base md:w-5/6 md:p-10 p-3 text-sm w-full">Our highly trained service providers are more than just stylists, but they embrace an artistic approach to every client they meet with. The moment you step into our salon, you are engulfed in the ivory, green, and gold tones that encompass the area of the Beauty Salon.
                    </p>

                    <button className="bg-black h-9 text-lg rounded-md cursor-pointer m-4 text-white "><a href="/about" className="md:p-3 p-2">Learn More</a></button>
                </div>
                <div className="right m-5 lg:w-1/2">
                    <img src={"/image1.png"} alt="" className="w-full h-full" />
                </div>
            </div>
    </>
  )
}

export default About