import data from "../../data";
import { FaClock } from "react-icons/fa6";
import { RevealText } from "../RevealText";
import { RevealObj } from "../RevealObj";

export default function TipsSection() {
  return (
    <section className="sm:mt-[2rem] w-full">
      <div className="w-full flex flex-col items-center">
        <p className="w-20 h-[0.1rem] bg-yellow-400 rounded-full"></p>
        <p className="font-semibold text-yellow-400">
          See tips and trick from our partnership
        </p>

        <h1 className="text-2xl font-bold text-[#1B1C57]">
          Find out more about selling and buying homes
        </h1>

        <button className="px-4 py-2 bg-[#29efad] mt-3 rounded-full">
          More Artikel
        </button>
      </div>

      <div className="flex flex-col sm:flex-row">
        {/* <!-- left side --> */}
        <div className="w-full sm:w-1/2 my-6 sm:my-10 space-y-8 sm:space-y-16">
          {Object.values(data.TipsSection.TipsSectionLeft).map(
            (info, index) => (
              <div className="flex flex-col sm:flex-row gap-4 sm:pr-5 " key={index}>
                <RevealObj>
                  <img
                    src={info.cardImg}
                    alt=""
                    className="w-[10rem] h-[8rem] rounded-lg"
                  />
                </RevealObj>
                <div className="flex flex-col justify-between">
                  <div className="flex gap-4">
                    <img
                      src={info.auther.avatar}
                      alt=""
                      className="size-8 rounded-full"
                    />
                    <RevealText>
                      <p className="font-semibold text-gray-500">
                        {info.auther.name}
                      </p>
                    </RevealText>
                  </div>
                  <RevealText>
                    <p className="text-lg font-bold text-[#26275F]">
                      {info.title}
                    </p>
                  </RevealText>
                  <RevealText>
                    <p className="text-gray-500 flex items-center gap-2">
                      <span>
                        <FaClock />
                      </span>
                      {info.data}
                    </p>
                  </RevealText>
                </div>
              </div>
            )
          )}
        </div>

        {/* <!-- right side --> */}
        <div className="w-full sm:w-1/2 my-6 sm:my-10">
          <div className="flex flex-col gap-4 float-end">
            <RevealObj>
              <img
                src={data.TipsSection.TipsSectionRight.BigCard.cardImg}
                alt=""
                className="max-w-[26rem] h-[10rem] sm:max-w-[45rem] sm:h-[20rem] rounded-lg"
              />
            </RevealObj>
            <div className="flex flex-col justify-between space-y-3">
              <div className="flex gap-4">
                <img
                  src={data.TipsSection.TipsSectionRight.BigCard.auther.avatar}
                  alt=""
                  className="size-8 rounded-full"
                />
                <RevealText>
                  <p className="font-semibold text-gray-500">
                    {data.TipsSection.TipsSectionRight.BigCard.auther.name}
                  </p>
                </RevealText>
              </div>
              <RevealText>
                <p className="text-xl font-bold text-[#26275F]">
                  {data.TipsSection.TipsSectionRight.BigCard.title}
                </p>
              </RevealText>{" "}
              <RevealText>
                <p className="text-lg font-semibold text-gray-400">
                  {data.TipsSection.TipsSectionRight.BigCard.description}
                </p>
              </RevealText>
              <RevealText>
                <p className="text-gray-500 flex items-center gap-2">
                  <span>
                    <FaClock />
                  </span>
                  {data.TipsSection.TipsSectionRight.BigCard.data}
                </p>
              </RevealText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
