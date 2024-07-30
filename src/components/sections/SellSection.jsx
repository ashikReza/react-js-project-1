import { useState, useRef } from "react";
import styled from "styled-components";
import { FaPlay, FaPause } from "react-icons/fa";

import { IoCall } from "react-icons/io5";

import data from "../../data";

import { RevealText } from "../RevealText";
export default function SellSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <section className="w-full my-[4rem] sm:my-[5rem] flex gap-5 flex-col sm:flex-row sm:justify-between items-center relative">
      <img
        src="/assets/mid 1.svg"
        alt=""
        className="absolute -top-1 right-0 sm:-right-20 hidden sm:block"
      />
      <img
        src="/assets/mid 2.svg"
        alt=""
        className="absolute -top-44 right-0 sm:-right-20 hidden sm:block"
      />

      {/* <!-- Left side --> */}
      <div className="w-full sm:w-1/2">
        <div className="flex gap-1 items-center">
          <p className="w-6 h-[0.12rem] bg-yellow-400 rounded-full"></p>
          <p className="text-yellow-500">Ready to Sell!</p>
        </div>

        <div className="my-4">
          <RevealText>
            <h1 className="text-2xl font-bold text-[#1B1C57]">
              Let’s tour and see our house!
            </h1>
          </RevealText>
          <RevealText>
            <p className="text-xl font-semibold text-gray-400 mt-4">
              Houses recommended by our partners that have been curated to
              become the home of your dreams!
            </p>
          </RevealText>
        </div>
        <div className="">
          <RevealText>
            <p className="text-xl font-semibold">House Detail</p>
          </RevealText>
          <ul className="grid grid-cols-2 my-4 space-y-3">
            <li className="flex items-center gap-1">
              <img src="./assets/bed 1.svg" alt="" className="size-8" />
              Bedrooms
            </li>
            <li className="flex items-center gap-1">
              <img src="./assets/bath 1.svg" alt="" className="size-8" />2
              Bathrooms
            </li>
            <li className="flex items-center gap-1">
              <img src="./assets/car-garage 1.svg" alt="" className="size-8" />1
              Carport
            </li>
            <li className="flex items-center gap-1">
              <img
                src="./assets/stairs-with-handrail 1.svg"
                alt=""
                className="size-8"
              />
              2 Floors
            </li>
          </ul>
        </div>
        <span></span>
        <div className="flex items-center space-x-2 md:space-x-10">
          <img
            src={data.SellSection.managerInfo.avatar}
            alt=""
            className="size-10 sm:size-12 rounded-full"
          />
          <div className="">
            <RevealText>
              <p className="font-bold">{data.SellSection.managerInfo.name}</p>
            </RevealText>
            <RevealText>
              <p className="font-semibold text-gray-400">Manager Director</p>
            </RevealText>
          </div>
          <button className="px-6 py-2 bg-[#1cb582] rounded-full flex items-center gap-3 text-white text-sm sm:text-lg font-semibold">
            <span className="">
              <IoCall />
            </span>
            Contact Now
          </button>
        </div>
      </div>
      {/* <!-- Right side --> */}
      <div className="w-full sm:w-1/2 flex justify-end mt-5">
        <RevealText>
          <VideoContainer>
            <Video ref={videoRef} onClick={handlePlayPause}>
              {/* Replace with your video source */}
              <source src={data.SellSection.PropertyVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </Video>
            <PlayPauseButton onClick={handlePlayPause}>
              {isPlaying ? <FaPause /> : <FaPlay />}
            </PlayPauseButton>
          </VideoContainer>
        </RevealText>
      </div>
    </section>
  );
}

const VideoContainer = styled.div`
  position: relative;
  // width: 640px; 
  width:  width: 350px; /* Adjust as needed */
 
  height: 360px; /* Adjust as needed */

  @media (width: 500px) {
    width: 350px; /* Adjust as needed */
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
`;

const PlayPauseButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: #ffff; /* White background */
  border-radius: 50%; /* Rounded shape */
  border: none;
  color: #ccc; /* Icon color should contrast with the background */
  font-size: 24px; /* Adjust icon size as needed */
  padding: 15px; /* Padding to create space around the icon */
  cursor: pointer;
  &:hover {
    color: #ccc; /* Lighter color on hover */
  }
`;
