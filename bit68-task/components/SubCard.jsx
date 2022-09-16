import React from 'react';
function SubCard() {
    return (
        <div className="w-full h-40 md:h-[352px] bg-gray-100 justify-self-end flex-shrink-0">
            <div className="w-max h-fit mx-auto flex flex-col mt-14 md:mt-28">
                <div className="text-black text-sm md:text-3xl mb-4">
                Subscribe our newsletter to be notified when it’ll be live.
                </div>
                <div className="flex border border-[#AAAAAA] border-r-0 rounded md:rounded-lg w-full h-6 md:h-12  text-black text-[7px] md:text-base">
                    <input type="text" placeholder="Email address" className="border-none bg-transparent focus:border-none focus:bg-transparent p-3 md:p-6 w-2/3"/>
                    <button className="bg-black border-black text-white rounded md:rounded-lg w-1/3 h-6 md:h-12 justify-self-end self-center hover:bg-gray-800">Subscribe</button>
                </div>

            </div>
            
        </div>
        
     );
}

export default SubCard;