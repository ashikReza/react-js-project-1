import data from "../../data";

import ReviewCard from "../cards/ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

export default function ReviewSection() {
  return (
    <section className="mt-[4rem] sm:mt-[8rem] mb-14 sm:mb-0 ">
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col items-center">
          <p className="w-20 h-[0.1rem] bg-yellow-400 rounded-full"></p>
          <p className="font-semibold text-yellow-400">See Our Review</p>
        </div>
        <h1 className="text-2xl font-bold text-[#1B1C57]">
          What Our User Say About Us
        </h1>
      </div>
      <div className="mt-10 w-ful">
        <Swiper
          className="sm:ml-9"
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 2500, // Delay between transitions (in ms). Adjust as needed.
            disableOnInteraction: false, // Autoplay will not stop on user interactions
          }}
          loop={true} // Enable continuous loop mode
          pagination={{
            clickable: true, // Make the dots clickable
            dynamicBullets: true, // Use dynamic bullets (optional)
          }}
          breakpoints={{
            // when window width is >= 640px (for tablets)
            640: {
              slidesPerView: 2,
            },
          }}
        >
          {Object.values(data.ReviewSection).map((card, index) => (
            <SwiperSlide key={index}>
              <ReviewCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
