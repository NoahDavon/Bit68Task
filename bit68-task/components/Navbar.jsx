import React from 'react';
function Navbar() {
    return ( 
        <nav className="bg-black w-full h-16">
            <div className="nav-content flex flex-row mx-7 items-center h-full">
                <div>
                    Icon
                </div>
                <div className="flex-grow"></div>
                <div>
                    Menu
                </div>
            </div>

        </nav>
     );
}

export default Navbar;