import React, { useState } from 'react'
import { images } from '../assets/images.js'


function Latest() {


    return (
        <>
            <div className='mt-10 lg:mt-20 w-full h-full'>
                <div className='ml-10 text-2xl font-semibold lg:ml-20 lg:text-4xl '>Latest Styles</div>

                <div className='max-w-[800px] max-h-[600px] border-4 mx-auto mt-12 '>
                    <img className='object-contain' src="https://images.pexels.com/photos/27669186/pexels-photo-27669186/free-photo-of-a-bird-flying-in-the-sky-with-a-cloudy-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                </div>
            </div >
        </>
    )
}

export default Latest