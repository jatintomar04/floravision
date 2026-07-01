import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

import user1 from "../assets/image/cr1.png";
import user2 from "../assets/image/cr2.jpg";
import user3 from "../assets/image/cr3.png";

const reviews = [
  {
    id: 1,
    image: user1,
    name: "Shelly Russel",
    review:
      "Just got my hands on some absolutely awesome plants, and I couldn't be happier!",
  },
  {
    id: 2,
    image: user2,
    name: "Lula Rolfson",
    review:
      "Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
  },
  {
    id: 3,
    image: user3,
    name: "Carol Huels",
    review:
      "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
  },
];

const CustomerReview = () => {
  return (
    <section className="w-full bg-[#1B2316] py-20 px-5 lg:px-10">
      {/* Heading */}

      <div className="flex justify-center mb-20">
        <h2 className="text-white text-4xl md:text-5xl font-bold">
          Customer Review
        </h2>
      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {reviews.map((item) => (
          <div
            key={item.id}
            className="relative rounded-[50px] border border-white/15 border-t-0 bg-white/10 backdrop-blur-xl px-8 py-10 overflow-hidden"
            style={{
              clipPath: `polygon(
                0% 12%,
                4% 6%,
                10% 2%,
                20% 0%,
                35% 2%,
                50% 3%,
                65% 2%,
                80% 0%,
                90% 2%,
                96% 6%,
                100% 12%,
                100% 100%,
                0% 100%
              )`,
            }}
          >
            {/* User */}

            <div className="flex items-center gap-5">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-full object-cover"
              />

              <div>
                <h3 className="text-white text-3xl font-semibold">
                  {item.name}
                </h3>

                <div className="flex items-center gap-1 mt-2 text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
              </div>
            </div>

            {/* Review */}

            <p className="mt-10 text-white/80 text-xl leading-10">
              {item.review}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;