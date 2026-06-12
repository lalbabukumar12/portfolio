
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg">
            <div className="container mx-auto flex items-center justify-between">
                <div>
                    <a href="#" className="text-3xl font-bold text-white">
                        Lalbabu 
                        <span className="text-purple-500"> Kumar</span>
                        <div className='w-4 h-4 bg-purple-500 rounded-full mt-2'> </div>
                    </a>
                    <div className='hidden md:flex space-x-10'>
                        
                        <a href="#home" className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                            <span>Home</span>
                            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500  transition all duration-300 group-hover:scale-w-full'></span>
                        </a>   
                        
                        <a href="#about" className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                            <span>About</span>
                            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500  transition all duration-300 group-hover:scale-w-full'></span>
                        </a> 

                        <a href="#Skills" className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                            <span>Skills</span>
                            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500  transition all duration-300 group-hover:scale-w-full'></span>
                        </a>   

                        <a href="#Projects" className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                            <span>Projects</span>
                            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500  transition all duration-300 group-hover:scale-w-full'></span>
                        </a>   

                        <a href="#Experience" className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                            <span>Experience</span>
                            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500  transition all duration-300 group-hover:scale-w-full'></span>
                        </a> 

                        <a href="#Contact" className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                            <span>Contact</span>
                            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500  transition all duration-300 group-hover:scale-w-full'></span>
                        </a>       

                    </div>
                </div>
                <div className="hidden md:flex space-x-10">
                </div>
                {/* Mobile menu button */}
                <div className='md:hidden'>
                    {
                        showMenu ? (
                            <FaTimes onClick={() => setShowMenu(false)} className='text-2xl cursor-pointer' />
                        ) : (
                            <FaBars onClick={() => setShowMenu(true)} className='text-2xl cursor-pointer' />
                        )
                    }        
                </div>
            </div>
            {/* Mobile menu */}
            {showMenu && (
                <div className='md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center'>
                    <a onClick={() => setShowMenu(false)} href="#home" className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                        <span>Home</span>
                    </a>

                    <a onClick={() => setShowMenu(false)} href="#about" className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                        <span>About</span>
                    </a>
                    <a onClick={() => setShowMenu(false)} href="#Skills" className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                        <span>Skills</span>
                    </a>
                    <a onClick={() => setShowMenu(false)} href="#Projects" className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                        <span>Projects</span>
                    </a>
                    <a onClick={() => setShowMenu(false)} href="#Experience" className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                        <span>Experience</span>
                    </a>
                    <a onClick={() => setShowMenu(false)} href="#Contact" className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                        <span>Contact</span>
                    </a>

                </div>
            )}
        </nav>
    );
};

export default Navbar;
