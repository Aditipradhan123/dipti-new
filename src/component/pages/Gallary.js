import React from 'react'

const Gallary = () => {
  return (
    <>
    <div className="border border-t-4 border-b-4 text-center md:p-12 p-10 bg-white">
                <div>
                    <h1 className="text-3xl font-bold">GALLERY</h1>
                    <p className=" p-5">VIEW OUR HINA WORK</p>
                </div>
                <div>
                    hina photos section
                </div>

                <button className="bg-black h-9 text-lg rounded-md cursor-pointer m-4 text-white"><a href="/gallary" className="md:p-3 p-2">VIEW MORE</a></button>
            </div>
    </>
  )
}

export default Gallary