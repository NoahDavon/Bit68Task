import React from 'react';
function Pagination({name, count, page, onChange }) {
    return (
        <div>
            {
            [...Array(Math.ceil(count)).keys()].map((key) => 
            <input type="radio" name={name} key={key} value={key} checked={page==key} onChange={(e) => onChange(e.target.value)} className='appearance-none subpixel-antialiased mx-2 my-1 w-1 h-1 first:w-[3px] last:w-[3px] rounded-full bg-gray-300 checked:bg-gray-900 transition-colors duration-1000'/>
            )} 
        </div>
        
     );
}

export default Pagination;