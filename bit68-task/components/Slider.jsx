import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Pagination from './Pagination';
function Slider({bgImages}) {
    const [slide, setSlide] = useState(0);
    useEffect(() =>{
        const interval = setInterval(() => {
            setSlide(prevSlide => (prevSlide+1)%bgImages.length)
        }, 3000);
        return () => clearInterval(interval);
    }, [])
    return ( 
        <div className="bg-white text-black relative w-full h-[220px]">
            <Image src={bgImages[slide].img} layout="fill" objectFit='cover' objectPosition="50%"/>
            <div className="hidden md:flex w-3/4 h-fit absolute mx-auto my-auto left-0 right-0 top-0 bottom-0">
                <button onClick={() =>setSlide(prevSlide => (prevSlide - 1 + bgImages.length)%bgImages.length)}>Hey</button>
                <div className="flex-grow"></div>
                <button onClick={() =>setSlide(prevSlide => (prevSlide + 1)%bgImages.length)}>Hey</button>
            </div>
            <div className="flex w-fit rounded-full bg-white drop-shadow-lg absolute bottom-6 mx-auto left-0 right-0 ">
                <Pagination name="slider" onChange={setSlide} page={slide} count={bgImages.length}/>
            </div>
        </div>
     );
}

export default Slider;