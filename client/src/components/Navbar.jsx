import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import "./../animations.css"



export default function Navbar() {

    const[isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const closeDropdown = () => {
        setIsOpen(false)
    }

    const location = useLocation();
    const currentPath = location.pathname;

    const handleClick = () => {
        window.scrollTo(0, 0);
      };

    return (
        <div className="">
            <nav className="flex fixed items-center ml-8 my-4 fade-in bg-opacity-50 z-50">
                
                <NavLink to="/" className="lg:text-7xl text-4xl font-bold" onClick={handleClick}>
                    <div className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400">
                        KICKS
                    </div>
                </NavLink>

                <nav id="Desktop Navbar" className="flex gap-x-5 ml-10 invisible lg:visible">
                    <NavLink to="/about" className={`text-xl hover:text-orange-500 ${currentPath === '/about' ? 'text-orange-500' : 'text-white'}`}>
                        About
                    </NavLink>
                    <NavLink to="/gallery" className={`text-xl hover:text-orange-500 ${currentPath === '/gallery' ? 'text-orange-500' : 'text-white'}`}>
                        Gallery
                    </NavLink>

                    <NavLink to="/explore" className={`text-xl hover:text-orange-500 ${currentPath === '/explore' ? 'text-orange-500' : 'text-white'}`}> 
                        Explore
                    </NavLink>
                </nav>

                <div id="Mobile Dropdown" className="lg:hidden fixed right-8">
                    <button onClick={toggleDropdown}className="text-4xl">&#8801;</button>
                    {isOpen && (
                       <div className="fixed top-[3.5rem] right-2 bg-white rounded-lg py-2 text-orange-400">
                            <div className="flex flex-col gap-y-2 items-center">
                                
                                <nav className="px-2">
                                    <NavLink to="/" onClick={() => { handleClick(); closeDropdown();}}>
                                    Home
                                    </NavLink>
                                </nav>
                                <div className="w-full border-[0.5px]"></div>
                                <nav className="px-2">
                                    <NavLink to="/about" onClick={closeDropdown}>
                                    About
                                    </NavLink>
                                </nav>
                                <div className="w-full border-[0.5px]"></div>
                                <nav className="px-2">
                                    <NavLink to="/gallery" onClick={closeDropdown}>
                                    Gallery
                                    </NavLink>
                                </nav>
                                <div className="w-full border-[0.5px]"></div>
                                <nav className="px-2">
                                    <NavLink to="/explore" onClick={closeDropdown}>
                                    Explore
                                    </NavLink>
                                </nav>
                            </div>
                        </div> 
                    )}
                </div>
            </nav>
        </div>
    )
}

