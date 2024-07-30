/* eslint-disable react/prop-types */
export default function ReviewCard({ card }) {
  return (
    <div className={``}>
      <img
        src={card.cardImg}
        alt=""
        className="rounded-xl w-[22rem] sm:w-[40rem] h-[16rem] sm:h-[22rem]"
      />
      <div className="mx-auto sm:mx-8 w-[18rem] sm:w-[35rem] bg-white drop-shadow-xl rounded-xl p-4 relative -top-24">
        <h1 className="text-lg sm:text-xl font-bold whitespace-normal text-[#1B1C57]">
          {card.reviewTitle}
        </h1>
        <p className="text-sm sm:text-xl font-semibold text-gray-400 whitespace-normal line-clamp-2 sm:line-clamp-none">
          {card.reviewDescription}
        </p>

        <div className="flex justify-between gap-3 mt-3">
          <div className="flex gap-4">
            <img
              src={card.auther.avatar}
              alt=""
              className="size-12 rounded-full"
            />
            <div className="">
              <p className="font-semibold">{card.auther.name}</p>
              <p className="text-gray-400">{card.auther.location}</p>
            </div>
          </div>

          <div className="mt-5 font-bold text-lg sm:text-xl flex items-center gap-2">
            {[...Array(Math.round(card.ratingNum))].map((_, i) => (
              <img
                key={i}
                src={card.ratingImg}
                alt=""
                className="size-3 sm:size-4 space-x-1"
              />
            ))}
            {card.ratingNum}
          </div>
        </div>
      </div>
    </div>
  );
}
