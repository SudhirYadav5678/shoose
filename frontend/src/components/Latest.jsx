import React, { useEffect, useState } from 'react'
import { images } from '../assets/images.js'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import { ArrowLeft, ArrowRight } from 'lucide-react'

function Latest() {
    return (
        <>
            <div className='mt-10 lg:mt-14'>
                <div className='text-3xl lg:text-5xl ml-5 lg:ml-16'>Latest Styles</div>

                <div className=' lg:mt-12'>
                    <Swiper
                        effect={'coverFlow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        spaceBetween={20}
                        slidesPerView={3}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: -75,
                            depth: 250,
                            modifier: 3.5,
                            slideShadows: false,
                        }}
                        navigation={{
                            nextEl: '.swipe-button-right',
                            prevEl: '.swipe-button-left',
                            clickabke: true,
                        }}
                        modules={[EffectCoverflow, Navigation]}
                        className="max-w-[400px] lg:max-w-[1000px] h-64 lg:h-72 rounded-2xl"
                    >
                        {
                            images.map((c, i) => (
                                <div key={i}>
                                    <SwiperSlide className="flex items-center justify-center">
                                        <div className=""><img className='rounded-xl' src={c.path} alt="images" /></div>
                                    </SwiperSlide>
                                </div>
                            ))
                        }
                        <div className=''>
                            <div className='swipe-button-left'><ArrowLeft size={28} /></div>
                            <div className='swipe-button-right'><ArrowRight size={28} /></div>
                        </div>
                    </Swiper>
                </div>
            </div >
        </>
    )
}

export default Latest