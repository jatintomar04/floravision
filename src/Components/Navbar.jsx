import React from 'react'
import Navimage from "../assets/image/logo.png"
import { CiSearch } from "react-icons/ci";
import { HiShoppingBag } from "react-icons/hi2";
import { IoReorderTwoOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <nav className="bg-transparent flex items-center justify-between py-5 font-sans">
            {/* Logo  */}
            <div className="flex items-center gap-2">
                <img
                    src={Navimage}
                    alt="Logo"
                    className="w-6 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-11 lg:h-11"
                />
                <span className="text-white text-2xl font-bold">FloraVision.</span>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-10 text-white/90">
                <a href="#" className="hover:text-white transition-colors">Home</a>
                <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
                    <span>Plants Type</span>
                    <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                <a href="#" className="hover:text-white transition-colors">More</a>
                <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>

            {/* Right Icons  */}
            <div className="flex items-center gap-6 text-white">
                <button
                    aria-label="Search"
                    className="hover:opacity-70 transition-opacity"
                >
                    <CiSearch className="w-6 h-6" />
                </button>
                <button aria-label="Cart" className="hover:opacity-70 transition-opacity">
                    <HiShoppingBag className='w-6 h-6 '/>
                </button>
                <button aria-label="Menu" className="hover:opacity-70 transition-opacity">
                    <IoReorderTwoOutline className='w-6 h-6 '/>
                    
                </button>
            </div>
        </nav>
    )
}

export default Navbar