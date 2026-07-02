import React from "react";
import deskPlantImage from "../assets/image/deskplant.png";
import secondPlantImage from "../assets/image/2deskplant.png";
import { IoBagOutline } from "react-icons/io5";

const TrendyPlants = () => {
  return (
    <section className="w-full py-16 md:py-24 overflow-hidden">
      {/* Heading */}
      <div className="flex justify-center mb-16">
        <div className=" px-10 md:px-10 py-4 ">
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
            Our Trendy Plants
          </h2>
        </div>
      </div>

      <div className="max-w-full mx-auto px-4 flex flex-col gap-32">

        {/* ================= Card 1 ================= */}

        <div className="relative pt-20 lg:pt-0">

          <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-[30px] sm:rounded-[50px] lg:rounded-[90px] flex flex-col lg:flex-row items-center gap-8 lg:gap-0 px-5  sm:px-8 lg:px-12 py-8 lg:py-0">

            {/* Plant Image */}

            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={deskPlantImage}
                alt="Desk Plant"
                className="
                w-44
                sm:w-56
                md:w-82
                lg:w-[420px]
                xl:w-[500px]
                2xl:w-[560px]
                object-contain
                drop-shadow-2xl
                -mt-20
                sm:-mt-24                
                lg:-mt-32
                "
              />
            </div>

            {/* Content */}

            <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-8  sm:py-10 lg:px-12 pb-10 lg:pb-0 text-center lg:text-left">

              <h3 className="text-white font-bold text-2xl md:text-3xl lg:text-5xl leading-tight">
                For Your Desk Decorations
              </h3>

              <p className="text-white/70 mt-6 leading-7 lg:leading-8 text-sm sm:text-base lg:text-lg max-w-md mx-auto lg:mx-0">
                I recently added a beautiful desk decoration plant to my
                workspace, and it has made such a positive difference!
              </p>

              <h4 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl mt-7">
                Rs. 599/-
              </h4>

              <div className="flex justify-center lg:justify-start gap-4 mt-8">

                <button className="border border-white px-6 md:px-8 py-3 rounded-xl text-white hover:bg-white/10 transition">
                  Explore
                </button>

                <button className="w-14 h-14 border border-white rounded-xl flex justify-center items-center hover:bg-white/10 transition">
                  <IoBagOutline className="text-white text-2xl" />
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* ================= Card 2 ================= */}

        <div className="relative pt-20 lg:pt-0">

          <div className=" relative bg-white/10 backdrop-blur-md border border-white/20 rounded-[40px] sm:rounded-[60px] lg:rounded-[100px] flex flex-col-reverse lg:flex-row items-center overflow-visible">

            {/* Content */}

            <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-10 lg:px-12 py-10 lg:py-0 text-center lg:text-left">

              <h3 className="text-white font-bold text-2xl sm:text-3xl lg:text-5xl leading-tight">
                For Your Living Room
              </h3>

              <p className="text-white/70 mt-6 leading-7 lg:leading-8 text-sm sm:text-base lg:text-lg max-w-md mx-auto lg:mx-0">
                Bring nature into your living room with elegant indoor
                plants. Fresh air, calming vibes and beautiful décor.
              </p>

              <h4 className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl mt-7">
                Rs. 799/-
              </h4>

              <div className="flex justify-center lg:justify-start gap-4 mt-8">

                <button className="border border-white px-8 py-3 rounded-xl text-white hover:bg-white/10 transition">
                  Explore
                </button>

                <button className="w-14 h-14 border border-white rounded-xl flex justify-center items-center hover:bg-white/10 transition">
                  <IoBagOutline className="text-white text-2xl" />
                </button>

              </div>

            </div>

            {/* Plant */}

            <div className=" lg:w-1/2 flex flex-col justify-center ">
              <img
                src={secondPlantImage}
                alt="Living Room Plant"
              
                className="
                w-44
                sm:w-56
                md:w-82
                lg:w-[420px]
                xl:w-[500px]
                2xl:w-[560px]
                object-contain
                drop-shadow-2xl
                -mt-20
                sm:-mt-24                
                lg:-mt-32
                "
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default TrendyPlants;