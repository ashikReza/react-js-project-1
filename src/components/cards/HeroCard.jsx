import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import data from "../../data"; // Assuming you've imported your data

export default function HeroCard() {
  const cards = Object.values(data.heroSectionCard);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 4000); // Change card every 3 seconds

    return () => clearInterval(interval);
  }, [cards.length]);

  const currentCard = cards[currentCardIndex];

  return (
    <div className="">
      <motion.div
        key={currentCardIndex}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        className="w-[20rem] sm:w-[22rem] h-[8.5rem] bg-white rounded-3xl flex items-center justify-between p-2"
      >
        <img
          src={currentCard.image}
          alt="hero"
          className="w-[8rem] h-[7.5rem] rounded-2xl"
        />
        <div className="ml-3">
          <h2 className="font-bold">{currentCard.title}</h2>
          <p className="py-1 text-gray-400">{currentCard.description}</p>
          <p className="font-semibold flex items-center gap-2">
            <img src={currentCard.starImg} alt="" className=" size-5 " />
            {currentCard.rating} (400+ Review)
          </p>
        </div>
      </motion.div>

      {/*  dots */}
      <ul className="flex gap-2 cursor-pointer mt-4">
        {cards.map((_, index) => (
          <li
            key={index}
            className={`size-3 rounded-full ${
              index === currentCardIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></li>
        ))}
      </ul>
    </div>
  );
}
