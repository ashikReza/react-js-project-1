import { useState } from "react";

import { AiFillHome } from "react-icons/ai";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { MdApartment, MdVilla } from "react-icons/md";
import RecommendationCard from "../cards/RecommendationCard";
import data from "../../data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";

import "swiper/css";

export default function RecommendationSection() {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const [selectedType, setSelectedType] = useState("All"); // Default to show all types

  const filterCards = (type) => {
    setSelectedType(type);
  };

  const filteredCards = Object.values(data.RecommendationSectionCard).filter(
    (card) => {
      if (selectedType === "All") {
        return true; // Show all cards if "All" is selected
      } else {
        return card.type.toLowerCase() === selectedType.toLowerCase();
      }
    }
  );

  return (
    <section className="w-full scroll-mt-20" id="recommendation">
      {/* <!-- top section --> */}
      <div className="flex items-center sm:justify-evenly mb-10 flex-col sm:flex-row space-y-5">
        <div className="">
          <div className="flex gap-1 items-center">
            <p className="w-6 h-[0.12rem] bg-yellow-300 rounded-full"></p>
            <p className="text-yellow-400">Our Recommendation</p>
          </div>

          <p className="text-2xl font-bold text-[#1B1C57]">Featured House</p>
        </div>
        <div className="px-4">
          <ul className="flex justify-center gap-4 flex-wrap cursor-pointer">
            <li
              onClick={() => filterCards("All")}
              className={`px-4 py-2 bg-green-100 rounded-full text-green-500 text-sm sm:text-lg flex items-center gap-2 ${
                selectedType === "All" ? "bg-green-300 text-green-600" : ""
              }`}
            >
              All
            </li>
            <li
              onClick={() => filterCards("House")}
              className={`px-4 py-2 bg-green-100 rounded-full text-green-500 text-sm sm:text-lg flex items-center gap-2 ${
                selectedType === "House" ? "bg-green-300 text-green-600" : ""
              }`}
            >
              <AiFillHome /> House
            </li>
            <li
              onClick={() => filterCards("Villa")}
              className={`px-4 py-2 bg-green-100 rounded-full text-green-500 text-sm sm:text-lg flex items-center gap-2 ${
                selectedType === "Villa" ? "bg-green-300 text-green-600" : ""
              }`}
            >
              <MdVilla /> Villa
            </li>
            <li
              onClick={() => filterCards("Apartment")}
              className={`px-4 py-2 bg-green-100 rounded-full text-green-500 text-sm sm:text-lg flex items-center gap-2 ${
                selectedType === "Apartment"
                  ? "bg-green-300 text-green-600"
                  : ""
              }`}
            >
              <MdApartment /> Apartment
            </li>
          </ul>
        </div>

        <div className=" flex space-x-1">
          <button
            className={`prev-button px-5 py-2 rounded-full text-sm sm:text-lg ${
              isBeginning ? "bg-gray-200" : "bg-green-400"
            }`}
            disabled={isBeginning}
          >
            <FaAngleLeft />
          </button>
          <button
            className={`next-button px-5 py-2 rounded-full text-sm sm:text-lg ${
              isEnd ? "bg-gray-200" : "bg-green-400"
            }`}
            disabled={isEnd}
          >
            <FaAngleRight />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Keyboard]}
        navigation={{
          prevEl: ".prev-button",
          nextEl: ".next-button",
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        onReachBeginning={() => {
          setIsBeginning(true);
          setIsEnd(false);
        }}
        onReachEnd={() => {
          setIsEnd(true);
          setIsBeginning(false);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        // Default number of slides per view
        slidesPerView={5}
        spaceBetween={10} // Adjust the space between slides
        // Define responsive breakpoints
        breakpoints={{
          // when window width is >= 1024px (for laptops)
          350: {
            spaceBetween: 0,
            slidesPerView: 1,
          },
          500: {
            spaceBetween: 5,
            slidesPerView: 2,
          },

          600: {
            slidesPerView: 2,
          },
          800: {
            slidesPerView: 3,
          },
          1000: {
            slidesPerView: 5,
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {filteredCards.map((card, index) => (
          <SwiperSlide key={index}>
            <RecommendationCard card={card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
