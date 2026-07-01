import React from "react";
import bgImage from "../assets/image/bgImage.jpg";
import Navbar from "../Components/Navbar";
import firstImage from "../assets/image/firstImage.png"
import reviewIng from "../assets/image/reviewimg.png"
import { IoIosArrowForward } from "react-icons/io";
import TrendyPlants from "../Components/Trendyplants";
import Products from '../Components/Products'

const Home = () => {
  return (
 <div
  className="px-12 relative bg-cover bg-center bg-no-repeat min-h-screen"
  style={{ backgroundImage: `url(${bgImage})` }}
>
   <Navbar /> 
   <div className="relative z-10 max-w-full mx-auto  h-full ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center min-h-screen">
          {/* Left content */}
          <div className="lg:col-span-7 flex flex-col gap-6  w-auto ">
            <h1 className="text-white/90 font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] ">
              Earth's Exhale
            </h1>

            <p className="text-white/80 text-base sm:text-lg max-w-md leading-relaxed">
              "Earth Exhale" symbolizes the purity and vitality of the
              Earth's natural environment and its essential role in
              sustaining life.
            </p>

            <div className="flex items-center gap-5 mt-2">
              <button className="border border-white/70 text-white text-lg font-medium px-8 py-4 rounded-md hover:bg-white/10 transition-colors">
                Buy Now
              </button>

              <button className="flex items-center gap-3 text-white/90 hover:text-white transition-colors">
                <span className="flex items-center justify-center w-12 h-12 rounded-full border border-white/70">
                  <svg
                    className="w-4 h-4 ml-0.5 "
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span className="text-sm sm:text-base">Live Demo...</span>
              </button>
            </div>
          </div>

          
          
{/* Right card - product */}
{/* Right card */}
<div className="lg:col-span-5 flex justify-center">
  <div className="relative w-[512px] h-[620px]">

    {/* Plant */}
    <img
      src={firstImage}
      alt=""
      className="
      absolute
      left-1/2
      -translate-x-1/2
      -top-[90px]
      z-30
      w-[400px]
      drop-shadow-2xl
      "
    />

    {/* Card */}
    <div
      className="

      absolute
      bottom-0
      w-full
      h-[730px]
      bg-white/10
      backdrop-blur-xl
      rounded-b-[390px]
      rounded-t-[999px]
      border border-white/20
      px-14
      pt-[320px]
      pb-10
      "
      style={{
        clipPath: `polygon(100% 100%, 0% 100% , 0.00% 25.43%, 1.43% 24.92%, 2.86% 24.41%, 4.29% 23.92%, 5.71% 23.44%, 7.14% 23.00%, 8.57% 22.59%, 10.00% 22.23%, 11.43% 21.92%, 12.86% 21.67%, 14.29% 21.48%, 15.71% 21.36%, 17.14% 21.30%, 18.57% 21.32%, 20.00% 21.40%, 21.43% 21.55%, 22.86% 21.76%, 24.29% 22.03%, 25.71% 22.36%, 27.14% 22.74%, 28.57% 23.16%, 30.00% 23.62%, 31.43% 24.10%, 32.86% 24.60%, 34.29% 25.11%, 35.71% 25.62%, 37.14% 26.12%, 38.57% 26.60%, 40.00% 27.06%, 41.43% 27.48%, 42.86% 27.85%, 44.29% 28.18%, 45.71% 28.45%, 47.14% 28.66%, 48.57% 28.81%, 50.00% 28.89%, 51.43% 28.90%, 52.86% 28.84%, 54.29% 28.71%, 55.71% 28.52%, 57.14% 28.27%, 58.57% 27.96%, 60.00% 27.59%, 61.43% 27.19%, 62.86% 26.74%, 64.29% 26.27%, 65.71% 25.77%, 67.14% 25.26%, 68.57% 24.75%, 70.00% 24.25%, 71.43% 23.76%, 72.86% 23.29%, 74.29% 22.86%, 75.71% 22.47%, 77.14% 22.12%, 78.57% 21.83%, 80.00% 21.60%, 81.43% 21.43%, 82.86% 21.33%, 84.29% 21.30%, 85.71% 21.34%, 87.14% 21.44%, 88.57% 21.61%, 90.00% 21.84%, 91.43% 22.13%, 92.86% 22.48%, 94.29% 22.87%, 95.71% 23.31%, 97.14% 23.77%, 98.57% 24.26%, 100.00% 24.77%)`
      }}
    >

      <p className="text-white/60 text-2xl mt-20">
        Indoor Plant
      </p>

      <div className="flex justify-between items-center">

        <h2 className="text-white text-[50px] leading-none font-light">
          Aglaonema plant
        </h2>

        <IoIosArrowForward className="text-white text-5xl"/>
      </div>

      <button
        className="
        mt-10
        py-4
        px-10
        border
        border-white
        rounded-2xl
        text-white
        text-2xl
        "
      >
        Buy Now
      </button>

      <div className="flex justify-center gap-3 mt-12">
        <div className="w-10 h-2 rounded-full bg-white"></div>
        <div className="w-2 h-2 rounded-full bg-white/40"></div>
        <div className="w-2 h-2 rounded-full bg-white/40"></div>
      </div>

    </div>

  </div>
</div>
</div>



      {/* Testimonial card - bottom left */}
      <div className="hidden lg:block absolute bottom-[-35px] left-0 z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 w-80">
        <div className="flex items-center gap-3 mb-3">
          <img
            src={reviewIng}
            alt="Ronnie Hamill"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-white font-medium text-sm">Ronnie Hamill</p>
            <div className="flex text-yellow-400 text-xs">★★★★☆</div>
          </div>
        </div>
        <p className="text-white/70 text-sm leading-relaxed">
          I can't express how thrilled I am with my new natural plants! They
          bring such fresh and vibrant energy to my home.
        </p>
      </div>
      </div>
      <TrendyPlants />
   
        
      
  </div>
  

  );
};

export default Home;