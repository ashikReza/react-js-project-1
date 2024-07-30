/* eslint-disable react/no-unknown-property */

import HeroCard from "../cards/HeroCard";

import data from "../../data";

import { FaLocationDot, FaChevronRight } from "react-icons/fa6";

import { RevealText } from "../RevealText";

export default function HeroSection() {
  return (
    <header className="flex flex-col sm:flex-row overflow-hidden">
      <img
        src="/assets/top color.svg"
        alt=""
        className=" absolute -top-44"
      />

      {/* Left side content  */}
      <div className="w-full flex flex-col justify-center sm:w-1/2 px-8 sm:px-16 overflow-hidden">
        <RevealText>
          <h1 className="mt-5 sm:mt-10 text-3xl sm:text-5xl font-black">
            Find the place to <br />
            <p className="flex items-center gap-2 ">
              Live
              <p className=" text-2xl flex sm:text-[2.5rem] font-TrainOne">
                Yours Dreams
              </p>
            </p>
            Easily hereasdasd
          </h1>
        </RevealText>
        <p className="w-[60%] h-2 rounded-full bg-yellow-300 my-5 sm:my-8"></p>
        <RevealText>
          <p className="text-lg sm:text-xl text-gray-400">
            Everything you need about finding your place to live will be here,
            where it will be easier for you
          </p>
        </RevealText>
        {/* input section */}
        <div className="sm:w-3/4 p-2 bg-white rounded-full border border-gray-300 flex items-center my-5 sm:my-8">
          <div className="w-8 h-8 flex items-center justify-center">
            <FaLocationDot className=" text-[#F59E0B] size-6" />
          </div>
          <input
            type="text"
            placeholder="Search for the location you want!"
            className="flex-grow px-2 text-sm font-medium bg-transparent border-none outline-none w-28"
          />
          <button className="px-3 py-2 bg-emerald-500 rounded-full flex items-center gap-1">
            <span className="text-white text-sm font-semibold flex items-center gap-2 ">
              Search <FaChevronRight className=" relative mt-[0.1rem]" />
            </span>
          </button>
        </div>

        <RevealText>
          <p className="text-lg sm:text-xl text-gray-400">Our Partnership</p>
        </RevealText>
        <RevealText>
          <div className="flex gap-4 flex-wrap">
            {Object.values(data.HeroSectionPartnershipImg).map(
              (image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Partnership Image ${index + 1}`}
                />
              )
            )}
          </div>
        </RevealText>
      </div>

      {/* Right side image */}
      <div className="w-full sm:absolute sm:top-0 sm:right-0 sm:w-1/2 h-[55vh] sm:h-[90vh] -z-10 bg-[url('/assets/bg.png')] bg-cover rounded-bl-[3rem] overflow-hidden">
        <div className="absolute -bottom-[10rem] sm:bottom-4 pl-8">
          {/* cards */}
          <HeroCard />
        </div>
      </div>
    </header>
  );
}
