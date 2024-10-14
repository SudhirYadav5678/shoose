import React, { useState } from 'react'
import { images } from '../assets/images.js'
import { ArrowLeft, ArrowRight } from 'lucide-react'

function HeroSection() {
    const [current, setCurrent] = useState(0)
    const prevSlide = () => {
        const isFirstSlice = current === 0;
        const nextSlice = isFirstSlice ? images.length - 1 : current - 1;
        setCurrent(nextSlice)
    }
    const nextSlide = () => {
        const isLastSlide = current === images.length - 1;
        const nextSlice = isLastSlide ? 0 : current + 1;
        setCurrent(nextSlice)
    }
    return (
        <>
            <div className='pt-5 w-full h-full lg:pt-14'>
                <div className='mt-20'>
                    <div className='flex justify-center'><h1 className='text-3xl lg:text-5xl mb-3'>Step Into Style</h1></div>
                    <div className='flex justify-center'><h1 className='text-4xl font-semibold lg:text-6xl'>Find Your Perfect Fit</h1></div>
                </div>

                <div className='hidden lg:flex justify-center items-center space-x-4 mt-10 w-full h-full mx-auto relative'>
                    <img src="https://images.pexels.com/photos/28101335/pexels-photo-28101335/free-photo-of-a-church-tower-in-the-middle-of-a-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Left Image" className="w-1/4 transform -rotate-6" loading='lazy' />
                    <img src="https://images.pexels.com/photos/28101335/pexels-photo-28101335/free-photo-of-a-church-tower-in-the-middle-of-a-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Middle Image" className="w-1/4" loading='lazy' />
                    <img src="https://images.pexels.com/photos/28101335/pexels-photo-28101335/free-photo-of-a-church-tower-in-the-middle-of-a-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Right Image" className="w-1/4 transform rotate-6" loading='lazy' />
                </div>

                <div className='w-[300px] h-[400px] mt-10 mx-auto relative lg:hidden'>
                    <div style={{ backgroundImage: `url(${images[current].path})` }} className='w-full h-full rounded-2xl bg-center bg-cover'></div>
                    <div onClick={prevSlide} className='absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 cursor-pointer '><ArrowLeft size={32} /></div>
                    <div onClick={nextSlide} className=' absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 cursor-pointer '><ArrowRight size={32} /></div>
                </div>
            </div>
        </>
    )
}

export default HeroSection