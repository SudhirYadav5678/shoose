import React, { useEffect, useState } from 'react'
import { images } from '../assets/images.js'

function Exclusive() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to automatically go to the next slide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    // Manually change slides
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    return (
        <>
            <div className='pt-10 w-full max-h-[400px] lg:max-h-[600px] lg:pt-20'>
                <div className="relative w-full h-96 mx-auto pt-2">
                    <div className="w-full h-full overflow-hidden">
                        <img
                            src={images[currentIndex].path}
                            alt={`Slide ${currentIndex}`}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Left Arrow */}
                    <button
                        onClick={goToPrevious}
                        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
                    >
                        &#10094;
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={goToNext}
                        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
                    >
                        &#10095;
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {images.map((_, index) => (
                            <div
                                key={index}
                                className={`w-3 h-3 bg-white rounded-full cursor-pointer ${currentIndex === index ? 'bg-opacity-100' : 'bg-opacity-50'}`}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Exclusive