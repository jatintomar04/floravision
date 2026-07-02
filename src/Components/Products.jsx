import React from "react";
import { IoBagOutline } from "react-icons/io5";

import firstPlant from "../assets/image/deskplant.png";
import secondPlant from "../assets/image/2deskplant.png";
import thirdPlant from "../assets/image/3plant.png";
import fourthPlant from "../assets/image/4plant.png";
import fifthPlant from "../assets/image/5plant.png";
import sixthPlant from "../assets/image/6plant.png";



const plants = [
  {
    id: 1,
    image: firstPlant,
    title: "Aglaonema Plant",
    desc: "The Aglaonema plant, commonly known as Chinese Evergreen, is famous for its attractive foliage and ease of care.",
    price: "Rs. 300/-",
  },
  {
    id: 2,
    image: secondPlant,
    title: "Plantain Lilies",
    desc: "Hostas are primarily grown for their lush, decorative leaves that come in a wide variety of shapes and sizes.",
    price: "Rs. 380/-",
  },
  {
    id: 3,
    image: thirdPlant,
    title: "Cactus",
    desc: "It is known for their ability to thrive in arid environments",
    price: "Rs. 259/-",
  },
    {
    id: 4,
    image: fourthPlant,
    title: "Aglaonema Plant",
    desc: "It is a popular tropical houseplant known for its distinctive, perforated leaves",
    price: "Rs. 400/-",
    imageClass: "w-52 sm:w-60 lg:w-85 -top-14",

  },
  {
    id: 5,
    image: fifthPlant,
    title: "Plantain Lilies",
    desc: "It is a popular tropical houseplant known for its distinctive, perforated leaves",
    price: "Rs. 450/-",
    imageClass: "w-48 sm:w-56 lg:w-85 -top-16",
  },
  {
    id:6 ,
    image: sixthPlant,
    title: "Cactus",
    desc: "Cactus plants are known for their ability to thrive in dry and arid environments.",
    price: "Rs. 359/-",
     imageClass: "w-52 sm:w-60 lg:w-85 -top-16",
  },
];

const TopSellingPlants = () => {
  return (
    <section className="w-full py-18 px-16  bg-[#1B2316]">
      {/* Heading */}
      <div className="flex justify-center mb-20">
        <div className="rounded-2xl px-8 py-3">
          <h2 className="text-white text-3xl md:text-5xl font-bold text-center">
            Our Top Selling Plants
          </h2>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        {plants.map((plant) => (
          <div key={plant.id} className="relative pt-28">
            {/* Plant Image */}
            <img
              src={plant.image}
              alt={plant.title}
               className={`
    absolute
    left-1/2
    -translate-x-1/2
    z-20
    object-contain
    drop-shadow-2xl
    ${
      plant.imageClass
        ? plant.imageClass
        : "w-60 sm:w-72 lg:w-80 -top-2"
    }
  `}
            />

            {/* Card */}
            <div
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[55px] px-8 pt-44 pb-8 h-full border-t-0"
              style={{
                clipPath: `polygon(
          0% 12%,
  2% 9%,
  4% 6%,
  6% 4%,
  8% 2.8%,
  10% 1.8%,
  14% 0.8%,
  20% 0%,
  30% 1%,
  40% 4%,
  50% 7%,
  60% 4%,
  70% 1%,
  80% 0%,
  86% 0.8%,
  90% 1.8%,
  92% 2.8%,
  94% 4%,
  96% 6%,
  98% 9%,
  100% 12%,
  100% 100%,
  0% 100%
                )`,
              }}
            >
              <h3 className="text-white text-3xl lg:text-4xl font-light">
                {plant.title}
              </h3>

              <p className="text-white/70 mt-5 leading-8 text-lg min-h-[140px]">
                {plant.desc}
              </p>

              <div className="flex justify-between items-center mt-8">
                <h4 className="text-white text-4xl font-light">
                  {plant.price}
                </h4>

                <button className="w-16 h-16 rounded-2xl border border-white flex justify-center items-center hover:bg-white/10 duration-300">
                  <IoBagOutline className="text-white text-2xl" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopSellingPlants;