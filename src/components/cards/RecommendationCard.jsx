/* eslint-disable react/prop-types */
import { RevealText } from "../RevealText";
import { RevealObj } from "../RevealObj";

export default function RecommendationCard({ card }) {
  return (
    <div className="my-6 ">
      <RevealObj>
        <div
          className={`w-[18rem] sm:w-[15rem] h-[40vh] rounded-lg relative`}
          style={{ backgroundImage: `url(${card.image})` }}
        >
          <p
            className={`absolute bottom-2 left-2 px-3 py-1 ${card.bgColor} rounded-full font-semibold ${card.textColor} flex items-center gap-2`}
          >
            <img src={card.icon} alt="" className=" size-5" />

            {card.CardTag}
          </p>
        </div>
      </RevealObj>
      <div className="my-4">
        <RevealText>
          <h1 className="font-bold text-xl">{card.title}</h1>
        </RevealText>
        <RevealText>
          <p className="font-semibold">{card.price}</p>
        </RevealText>
      </div>
      <div className="flex gap-2 mt-3 w-[14rem] ">
        <RevealText>
          <img
            src={card.agent.avatar}
            alt=""
            className="w-16 h-12 sm:w-16 sm:h-12 rounded-full"
          />
        </RevealText>
        <div className="flex flex-col w-full ">
          <RevealText>
            <p className=" font-bold ">{card.agent.name}</p>
          </RevealText>
          <RevealText>
            <p className="font-semibold text-gray-400">{card.agent.location}</p>
          </RevealText>
        </div>
      </div>
    </div>
  );
}
