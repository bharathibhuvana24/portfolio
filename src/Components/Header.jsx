import { FaBars } from "react-icons/fa";
import { useState } from 'react'

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return(
        <header className="flex justify-between px-5 bg-primary py-3">
            <a href="#" className="font-bold font-header-font text-2xl text-black"> Bagya Lakshmi</a>
           <nav className="hidden md:block">
            <ul className="flex text-white  ">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#resume">Resume</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            </nav>
            { toggleMenu && <nav className="block md:hidden">
            <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#resume">Resume</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            </nav> }
            <button onClick={() => setToggleMenu(!toggleMenu)}  className='block md:hidden'><FaBars className='text-white h-5' /></button>
        </header>
    ) 
}

export default Header