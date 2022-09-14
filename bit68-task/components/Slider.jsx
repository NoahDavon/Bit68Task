import React, { useState, useEffect } from 'react';
import Image from 'next/image';
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
            <div className="flex w-fit rounded-full bg-white drop-shadow-lg absolute bottom-6 mx-auto left-0 right-0 ">
                {
                    [...Array(bgImages.length).keys()].map((key) => 
                    <input type="radio" name='slider' key={key} checked={slide==key} onChange={()=> setSlide(key)} className='appearance-none subpixel-antialiased mx-2 my-1 w-1 h-1 first:w-[3px] last:w-[3px] rounded-full bg-gray-300 checked:bg-gray-900 transition-colors duration-1000'/>         
                    )
                }

            </div>
        </div>
     );
}

export default Slider;