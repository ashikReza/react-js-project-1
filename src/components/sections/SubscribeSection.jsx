import { CgMail } from "react-icons/cg";
export default function SubscribeSection() {
  return (
    <section className="mt-[4rem] w-full">
      <div className="w-full h-[16rem] bg-gradient-to-r from-[#9CBEF9] from-0% bg-[#eefff9] via-50% to-[#D6DCF8] to-100% rounded-3xl flex justify-center items-center flex-col text-center">
        <p className="text-[#1B1C57] text-xl sm:text-2xl font-black px-11">
          Subscribe For More Info and update from Hounter
        </p>
        {/* <!-- input section --> */}
        <div className="sm:w-2/4 p-2 mx-2 bg-white rounded-full border border-gray-300 flex items-center mt-5 sm:mt-8">
          <div className="w-8 h-8 flex items-center justify-center">
            <CgMail color="blue" className=" size-5 sm:size-7" />
          </div>
          <input
            type="text"
            placeholder="Search for the location you want!"
            className="flex-grow px-2 text-sm font-medium bg-transparent border-none outline-none"
          />
          <button className="px-3 py-2 bg-emerald-500 rounded-full flex items-center gap-1">
            <span className="text-white text-xs sm:text-sm font-semibold ">
              Subsribe Now
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
