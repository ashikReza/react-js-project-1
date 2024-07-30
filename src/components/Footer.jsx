import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";

import { RevealText } from "./RevealText";
import { RevealObj } from "./RevealObj";

export default function Footer() {
  return (
    <footer className="w-full flex justify-between my-16 sm:mt-32 flex-wrap sm:flex-nowrap">
      {/* <!-- 1 --> */}
      <div className="sm:w-2/3">
        <RevealText>
          <img src="/assets/Logo.svg" alt="" className="mb-3" />
        </RevealText>
        <RevealObj>
          <p className="font-semibold text-gray-500">
            We provide information about properties such as houses, villas and
            apartments to help people find their dream home
          </p>
        </RevealObj>
        <RevealObj>
          <div className="mt-4 flex items-center space-x-5">
            <FaFacebookF />
            <IoLogoTwitter />
            <AiFillInstagram />
          </div>
        </RevealObj>
      </div>
      <div className="w-full flex justify-between flex-wrap mt-5 sm:mt-0">
        {/* <!-- 2 --> */}
        <div className="">
          <RevealText>
            <p className="mb-5 font-bold">Property</p>
          </RevealText>

          <RevealObj>
            <p className="font-semibold text-gray-500">House</p>
            <p className="font-semibold text-gray-500">Apartment</p>
            <p className="font-semibold text-gray-500">Villa</p>
          </RevealObj>
        </div>
        {/* <!-- 3 --> */}
        <div className="">
          <RevealText>
            <p className="mb-5 font-bold">Article</p>
          </RevealText>
          <RevealObj>
            <p className="font-semibold text-gray-500">New Article</p>
            <p className="font-semibold text-gray-500">Popular Article</p>
            <p className="font-semibold text-gray-500">Most Read</p>
            <p className="font-semibold text-gray-500">Tips & Tricks</p>
          </RevealObj>
        </div>
        {/* <!-- 4 --> */}
        <div className="">
          <RevealText>
            <p className="mb-5 font-bold">Contact</p>
          </RevealText>
          <RevealObj>
            <p className="font-semibold text-gray-500">
              2464 Royal Ln. Mesa, New Jersey 45463
            </p>
            <p className="font-semibold text-gray-500">(671) 555-0110</p>
            <p className="font-semibold text-gray-500">info@hounter.com</p>
          </RevealObj>
        </div>
      </div>
    </footer>
  );
}
