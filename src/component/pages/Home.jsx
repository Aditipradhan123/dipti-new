import React, { Suspense } from 'react'
import Navbar from '../../layout/Navbar'
import home from './../../assets/images/home.png'
import Footer from '../../layout/Footer'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000
    };
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <Navbar />
            <div className='border border-t-4 border-b-4 grid grid-cols-12 gap-4'>
                <div className='col-span-12 md:col-span-3 p-5'>
                    <h1 className='font-bold text-6xl leading-normal p-5'>Enjoy The Incredible</h1>
                    <h2 className='font-semibold text-3xl'>Beauty Service Experience</h2>
                    <p className='pt-10 font-semibold text-xl pl-5'>Providing Beauty Services Primarily Threading, Henna Art and Waxing.</p>
                    <div className='flex justify-center pt-16'>
                        <button className="bg-black text-xl h-14 rounded-md cursor-pointer text-white">
                            <a href="/about" className="appointment-btn font-bold">BOOK APPOINTMENT</a>
                        </button>
                    </div>
                </div>
                <div className='col-span-12 md:col-span-9 home-img'>
                    <Slider {...settings}>
                        <div className="slider-img">
                            <img src={home} alt="Logo" />
                        </div>
                        <div className="slider-img">
                            <img src={home} alt="Logo" />
                        </div>
                        <div className="slider-img">
                            <img src={home} alt="Logo" />
                        </div>
                        <div className="slider-img">
                            <img src={home} alt="Logo" />
                        </div>
                    </Slider>
                </div>
            </div>

            {/* carousel */}
            <div className="border border-t-4 border-b-4">
                <h1 className="md:text-5xl text-3xl text-center font-bold p-10">Our Team Members</h1>
                <Carousel responsive={responsive}>
                    <div>Item 1</div>
                    <div>Item 2</div>
                    <div>Item 3</div>
                    <div>Item 4</div>
                    <div>Item 5</div>
                    <div>Item 6</div>
                    <div>Item 7</div>
                    <div>Item 8</div>
                </Carousel>;
                <div className='flex items-center'>
                    <button className="bg-black h-9 text-lg rounded-md cursor-pointer m-4 text-white"><a href="/gallary" className="md:p-3 p-2">View Our Services and Prices</a></button>
                </div>
            </div>

            {/* third section */}
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

            {/* fourth section */}
            <div className="border border-t-4 border-b-4 h-auto bg-black w-full md:p-9  lg:flex lg:justify-between ">
                <div className="left lg:w-1/2 md:w-full sm:w-full">
                    <h1 className="lg:text-4xl text-3xl font-bold md:p-5 p-3 text-white">WHY CHOOSE US?</h1>
                    <p className="lg:p-12 lg:text-xl lg:w-full md:text-base md:w-5/6 md:p-10 p-3 text-white text-sm w-full">Write something unique about yourself and the salon. Write something unique about yobnjnknurself and the salon.Write something uniqu mnklk;e about yourself vgvgj and the salon.Write something ucggvjhb hnique about yourself and the salon.Write something unique about yourself and the salon.Write something unique abonknklnmkmk;ut yourself and the salon.Write somvhvbjbjlnjlnj ething unique about yourself and the salon. bjkbjnknkm jnjl bjbjkb
                    </p>

                    <button className="bg-white h-9 text-lg rounded-md cursor-pointer m-4 text-black"><a href="/about" className="md:p-3 p-2">BOOK APPOINTMENT</a></button>
                </div>
                <div className="right m-5 lg:w-1/2 text-white">
                    <div className='flex gap-3 p-10'>
                        <div>logo</div>
                        <div>
                            <h1>REASON 1</h1>
                            <p>Kindly send your registration to hello@reallygreatsite.com.</p>
                        </div>
                    </div>
                    <div className='flex gap-3 p-10'>
                        <div>logo</div>
                        <div>
                            <h1>REASON 2</h1>
                            <p>Sign up at hello@reallygreatsite.com to gain webinar access details.</p>
                        </div>
                    </div>
                    <div className='flex gap-3 p-10'>
                        <div>logo</div>
                        <div>
                            <h1>REASON 3</h1>
                            <p>please fill out the form at hello@reallygreatsite.com for a press pass.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* fifth section */}
            <div className="border border-t-4 border-b-4 bg-black text-white">
                <h1 className="text-3xl font-bold text-center p-10">OUR REVIEWS SPEAKS OUT LOUD</h1>
                <div className="flex justify-evenly border border-solidshadow-2xl p-5 m-10 rounded-xl">
                    <div className='p-5'>
                        <div className="">
                            <img src="" alt="" className=" bg-white rounded-full w-20 h-20" />
                        </div>
                        <div className='text-center'>
                            <h3 className="font-bold text-xl">user name</h3>
                            <p className="font-bold">user position</p>
                            <p>user reviews descroiption</p>
                        </div>
                    </div>

                    <div className='p-5'>
                        <div className="">
                            <img src="" alt="" className="rounded-full w-20 h-20" />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl">user name</h3>
                            <p className="font-bold">user position</p>
                            <p>user reviews descroiption</p>
                        </div>
                    </div>

                    <div className='p-5'>
                        <div className="">
                            <img src="" alt="" className="rounded-full w-20 h-20" />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl">user name</h3>
                            <p className="font-bold">user position</p>
                            <p>user reviews descroiption</p>
                        </div>
                    </div>

                    <div className='p-5'>
                        <div className="">
                            <img src="" alt="" className="rounded-full w-20 h-20" />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl">user name</h3>
                            <p className="font-bold">user position</p>
                            <p>user reviews descroiption</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* sixth section */}
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

            {/* seventh section */}
            <div className="border border-t-4 border-b-4 text-center md:p-12 bg-white">
                <h1 className='pb-10 text-2xl font-bold'>Its Easy To Get in touch with Us</h1>
                <div className='flex justify-evenly'>
                    <div>
                        <div className='flex gap-5'>
                            <div>icon</div>
                            <div>www.diptithreading.com</div>
                        </div>
                        <div className='flex gap-5'>
                            <div>gmail</div>
                            <div>www.diptithreading@gmail.com</div>
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-5'>
                            <div>call</div>
                            <div>702-614-2787</div>
                        </div>
                        <div className='flex gap-5'>
                            <div>instagram</div>
                            <div>@diptithreading</div>
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-5'>
                            <div>location</div>
                            <div>500 E Windmill Ln #110 Las Vegas Nv 89123</div>
                        </div>
                        <div className='flex gap-5'>
                            <div>facebook</div>
                            <div>@diptithreading</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* eighth section */}
            <div className="flex justify-around border border-t-4 border-b-4 text-center md:p-12 bg-white h-96">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative" >
                    <iframe width="100%" height="100%" className="absolute inset-0" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.662849528088!2d85.31829767514621!3d27.665901027318835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19000a4f32cf%3A0x53f71813950137ff!2sEvolve%20IT%20Hub%20Nepal!5e0!3m2!1sen!2snp!4v1707120552707!5m2!1sen!2snp"></iframe>
                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md invisible md:visible ">
                        <div className="lg:w-1/2 px-6" >
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs ">ADDRESS</h2>
                            <p className="mt-1">Puranobaneshor, Kathmandu</p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                            <a className="text-indigo-500 leading-relaxed">diptithreading@gmail.com</a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                            <p className="leading-relaxed">977-98601132</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1>OPERATING HOURS</h1>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Home