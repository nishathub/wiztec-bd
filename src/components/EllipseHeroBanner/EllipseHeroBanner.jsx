import { motion } from "framer-motion";

const EllipseHeroBanner = () => {
  const starDot = (className) => {
    return (
      <div
        className={`${className} absolute w-[3px] h-[3px] sm:w-[4px] sm:h-[4px] md:w-[6px] md:h-[6px] bg-white rounded-full`}
      ></div>
    );
  };

  const statBox = (top = "", middle = "", bottom = "") => {
    return (
      <div className="text-white text-left border border-[#3C3C3C] py-6 px-4 sm:py-8 rounded-xl">
        <p className="text-[14px] sm:text-[16px]">{top}</p>
        <h3 className="text-[32px] sm:text-[38px] md:text-[42px] font-semibold">
          {middle}
        </h3>
        <p className="text-[14px] sm:text-[16px]">{bottom}</p>
      </div>
    );
  };

  return (
    <div className="relative w-full flex justify-center items-center min-h-[80vh] sm:min-h-[90vh] bg-[#2A0019] overflow-hidden px-4 sm:px-6">
      {/* Blur Left  */}
      <div className="absolute top-[20%] left-[10%] w-40 h-40 sm:w-60 sm:h-72 bg-[#fff5d2] opacity-40 rounded-full blur-[70px] sm:blur-[90px]" />
      <div className="absolute top-[40%] left-[6%] w-20 h-28 sm:w-28 sm:h-40 bg-[#99beff] opacity-80 rounded-full blur-[70px]" />
      {/* Blur Middle  */}
      <div className="absolute -top-[20%] sm:-top-[10%] left-1/2 -translate-x-1/2 w-60 h-28 sm:w-80 sm:h-40 bg-[#fff5d2] opacity-40 rounded-full blur-[90px]" />
      <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-60 h-60 sm:w-80 sm:h-80 bg-[#fff5d2] opacity-30 rounded-full blur-[100px] sm:blur-[130px]" />
      {/* Blur Right  */}
      <div className="absolute top-[4%] right-[6%] w-48 h-52 sm:w-60 sm:h-72 bg-[#fff5d2] opacity-40 rounded-full blur-[80px]" />
      <div className="absolute top-[26%] right-[4%] w-40 h-48 sm:w-60 sm:h-72 bg-[#925853] opacity-40 rounded-full blur-[80px]" />
      {/* Left  */}
      {starDot("top-[10%] left-[8%]")}
      {starDot("top-[2%] md:top-[18%] left-[14%]")}
      {starDot("hidden md:block top-[30%] left-[10%] opacity-40")}
      {starDot("hidden md:block top-[44%] left-[20%] opacity-40")}
      {/* Right  */}
      {starDot("top-[6%] right-[12%]")}
      {starDot("top-[22%] right-[18%] opacity-80")}
      {starDot("hidden md:block top-[44%] right-[12%]")}

      <div className="relative z-10 max-w-7xl w-full text-center py-10 sm:py-12">
        <div className="max-w-3xl mx-auto">
          <p className="w-fit mx-auto px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-[#1B162699] text-white text-[12px] sm:text-[16px] font-semibold">
            BUILD FOR YOU
          </p>

          <h2 className="mt-6 font-extrabold text-3xl sm:text-5xl md:text-7xl leading-tight sm:leading-[1.2]">
            <span className="bg-gradient-to-r from-white to-[#A5C5DD] bg-clip-text text-transparent">
              Built for Creators.
            </span>
            <br />
            <span className="bg-gradient-to-r from-white to-[#A5C5DD] bg-clip-text text-transparent">
              Powered for Profit
            </span>
          </h2>

          <p className="text-white mt-4 sm:mt-6 text-[13px] sm:text-[18px] md:text-[20px] leading-[150%]">
            Create and sell courses, consulting services, and communities — with
            Zero marketing cost and a built-in sales network.
          </p>

          <div className="relative mt-6 flex justify-center gap-2 max-w-md sm:max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter Your Email Here"
              className="input h-12 sm:h-16 md:h-[76px] w-full px-4 sm:px-6 rounded-full bg-[#3B3B4B] text-white text-sm sm:text-base placeholder-white/60"
            />
            <button className="absolute z-10 right-1 top-1/2 -translate-y-1/2 px-4 sm:px-6 py-2 sm:py-4 rounded-full bg-gradient-to-b from-[#693FFFFC] to-[#C02EE5] text-[#E7F4FD] font-medium text-sm sm:text-base">
              <p>Start For Free</p>
              <span className="hidden md:block text-[12px] tracking-tighter">
                No Credit Card Required
              </span>
            </button>
          </div>
          <p className="text-[#DEDEDE] text-[10px] sm:text-xs mt-3">
            By proceeding you agree to our Platform terms & Privacy Notice
          </p>
        </div>

        <div className="max-w-7xl mx-auto mt-10 sm:mt-16 md:mt-20 py-6 sm:py-8 rounded-[30px] sm:rounded-[40px] border border-[#505152]">
          <div className="px-4 sm:px-6">
            <div className="mb-8 sm:mb-12 flex flex-col md:flex-row gap-4 justify-between">
              <h2 className="text-white text-lg sm:text-2xl md:text-3xl font-semibold text-left">
                Sell from day one - even with zero audience
              </h2>
              <button className="btn p-4 sm:p-6 border rounded-full text-white hover:bg-white/20 text-[14px] sm:text-[16px]">
                Open calculator
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
              {statBox(
                "CO-SELLERS IN NETWORK",
                "21,500+",
                "People who can co-promote"
              )}
              {statBox(
                "EXPECTED BUYERS / MONTH",
                "86",
                "With zero personal audience"
              )}
              {statBox(
                "EST. MRR AT US$9/MO",
                "US$774",
                "From membership sales"
              )}
              {statBox("EARN W/O A PRODUCT", "US$300", "Just by co-selling")}
            </div>
          </div>

          <div className="mt-8 sm:mt-10 bg-[#FFF3D8] overflow-hidden whitespace-nowrap py-2 sm:py-3">
            <motion.div
              animate={{ x: [0, -800] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="text-[#695F4C] text-xs sm:text-sm md:text-[20px] font-medium inline-block"
            >
              Unlike Kajabi, Teachable, or Skool, Growhubs helps you find and
              convert clients inside the platform so you can sell from day one
              without paying for ads.
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EllipseHeroBanner;
