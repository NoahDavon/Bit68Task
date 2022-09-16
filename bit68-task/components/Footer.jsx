import React from 'react';
function Footer() {
    return ( 
        <div className="relative w-full h-32 md:h-48">
            <div className='absolute bottom-0 h-32 md:h-48 w-full bg-black text-white'>
                <div className='w-full flex justify-evenly'>
                    <div>ICON</div>
                    <div>ICON</div>
                    <div>ICON</div>
                    <div>ICON</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;