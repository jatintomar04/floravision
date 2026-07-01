import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/image/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#1B2316] text-white py-16 md:py-20 px-5 sm:px-8 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14 lg:gap-20">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <img
                src={logo}
                alt="logo"
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain"
              />

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                FloraVision.
              </h2>
            </div>

            <p className="mt-8 text-base sm:text-lg lg:text-xl leading-8 text-white/85 max-w-md mx-auto md:mx-0">
              "From lush indoor greens to vibrant outdoor blooms, our plants are
              crafted to thrive and elevate your living environment."
            </p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-8 mt-10">
              <a
                href="#"
                className="text-2xl sm:text-3xl hover:text-green-400 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="text-2xl sm:text-3xl hover:text-green-400 transition"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="text-2xl sm:text-3xl hover:text-green-400 transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Middle Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8">
              Quick Link's
            </h3>

            <ul className="space-y-5 text-lg sm:text-xl">
              <li>
                <a href="#" className="hover:text-green-400 underline">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-green-400 underline">
                  Type's Of Plant's
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-green-400 underline">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-green-400 underline">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8">
              For Every Update.
            </h3>

            {/* Subscribe */}
            <div className="flex flex-col sm:flex-row border border-white rounded-xl overflow-hidden">
              <input
                type="email"
                placeholder="Enter Email"
                className="flex-1 bg-transparent px-5 py-4 text-lg outline-none placeholder:text-white/70"
              />

              <button className="bg-white text-black font-semibold px-6 py-4 hover:bg-green-300 transition whitespace-nowrap">
                SUBSCRIBE
              </button>
            </div>

            <p className="mt-10 xl:mt-24 text-base sm:text-lg text-white/90">
              FloraVision © All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;