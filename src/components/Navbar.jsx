import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import logo from "/assets/Logo.svg";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleItemClick = (e) => {
    // Stop the propagation of the click event to prevent it from bubbling up
    e.stopPropagation();

    setIsOpen(false); // Close the menu
  };

  return (
    <nav className="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto">
      <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
        <div className="flex items-center gap-2">
          <a href="./index.html">
            <img src={logo} className="w-28" alt="" />
          </a>
        </div>
      </div>
      <div className="sm:flex items-center justify-end gap-2 hidden">
        <ul className="flex justify-between gap-3">
          <li className="px-3 py-2 rounded-full bg-white bg-opacity-25 backdrop-filter backdrop-blur-md border border-gray-300 font-semibold text-white cursor-pointer">
            About Us
          </li>
          <li className="px-3 py-2 rounded-full bg-white bg-opacity-25 backdrop-filter backdrop-blur-md border border-gray-300 font-semibold text-white cursor-pointer">
            Article
          </li>
          <a href="#recommendation">
            <li className="px-3 py-2 rounded-full bg-white bg-opacity-25 backdrop-filter backdrop-blur-md border border-gray-300 font-semibold text-white cursor-pointer flex items-center gap-2">
              Property <IoIosArrowDown className=" text-sm font-bold" />
            </li>
          </a>
        </ul>
        <button className="px-3 py-2 bg-green-200 rounded-full ml-6 font-semibold">
          Sign up!
        </button>
      </div>

      <div className="sm:hidden" onClick={toggleMenu}>
        {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 h-full w-full shadow-xl bg-opacity-50 z-50"
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            transition={{ ease: "easeInOut" }} // Adding smooth transition
            onClick={closeMenu} // Close menu when background is clicked
          >
            <motion.div
              className="fixed top-0 left-0 h-full w-64 bg-gray-100 "
              initial="closed"
              animate="open"
              exit="closed"
              variants={variants}
              transition={{ ease: "easeInOut" }} // Adding smooth transition
              onClick={handleItemClick} // Prevent menu from closing when clicked inside
            >
              <ul
                className="flex flex-col justify-between gap-4 font-semibold ml-10 mt-16"
                onClick={handleItemClick}
              >
                <li className=" cursor-pointer">About Us</li>
                <li className=" cursor-pointer">Article</li>
                <a href="#recommendation">
                  <li className=" cursor-pointer ">Property</li>
                </a>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
