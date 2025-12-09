import { motion } from "framer-motion";

const EllipseHeroBanner = () => {
  const starDot = (className) => {
    return (
      <div
        className={`${className} absolute w-[6px] h-[6px] bg-white rounded-full`}
      ></div>
    );
  };
  const statBox = (top = "", middle = "", bottom = "") => {
    return (
      <div className="text-white text-left border border-[#3C3C3C] py-8 px-4 rounded-xl">
        <p className="text-[16px]">{top}</p>
        <h3 className="text-[42px] font-semibold">{middle}</h3>
        <p className="text-[16px]">{bottom}</p>
      </div>
    );
  };
  return (
    <div className="relative w-full flex justify-center items-center min-h-[90vh] bg-[#2A0019] overflow-hidden px-4">
      {/* Blur Effect  */}
      {/* left  */}
      <div className="absolute top-[16%] left-[14%] w-72 h-80 bg-[#fff5d2] opacity-40 rounded-full blur-[90px]" />
      <div className="absolute top-[36%] left-[8%] w-32 h-40 bg-[#99beff] opacity-80 rounded-full blur-[90px]" />
      {/* Middle top  */}
      <div className="absolute -top-[10%] left-[50%] -translate-x-1/2 w-80 h-40 bg-[#fff5d2] opacity-40 rounded-full blur-[90px]" />
      {/* Middle bottom  */}
      <div className="absolute bottom-[30%] left-[50%] -translate-x-1/2 w-80 h-80 bg-[#fff5d2] opacity-30 rounded-full blur-[130px]" />
      {/* Right  */}
      <div className="absolute top-[2%] right-[8%] w-72 h-80 bg-[#fff5d2] opacity-40 rounded-full blur-[90px]" />
      <div className="absolute top-[30%] right-[5%] w-72 h-80 bg-[#925853] opacity-40 rounded-full blur-[90px]" />

      {/* Small Star-like Dots */}
      {/* Left */}
      {starDot("top-[12%] left-[10%]")}
      {starDot("top-[20%] left-[15%]")}
      {starDot("top-[30%] left-[12%] opacity-40")}
      {starDot("top-[45%] left-[22%] opacity-40")}
      {/* Right  */}
      {starDot("top-[8%] right-[14%]")}
      {starDot("top-[22%] right-[20%] opacity-80")}
      {starDot("top-[45%] right-[14%]")}

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full text-center py-12">
        <div className="max-w-3xl mx-auto">
          <p className="w-fit mx-auto px-5 py-2 rounded-[100px] bg-[#1B162699] text-white text-[16px] font-semibold">
            BUILD FOR YOU
          </p>

          <h2 className="mt-6 font-extrabold text-4xl sm:text-5xl md:text-7xl">
            <span className="bg-gradient-to-r from-white to-[#A5C5DD] bg-clip-text text-transparent">
              Built for Creators.
            </span>
            <br />
            <span className="bg-gradient-to-r from-white to-[#A5C5DD] bg-clip-text text-transparent">
              Powered for Profit
            </span>
          </h2>

          <p className="text-white mt-6 text-sm sm:text-[20px] sm:leading-[150%]">
            Create and sell courses, consulting services, and communities — with
            Zero marketing cost and a built-in sales network.
          </p>

          {/* Email Input */}
          <div className="relative mt-6 flex justify-center gap-2 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter Your Email Here"
              className="input h-16 md:h-[76px] w-full px-6 rounded-full bg-[#3B3B4B] text-white placeholder-white/60"
            />
            <button className="absolute z-10 right-1 top-1/2 -translate-y-1/2 px-6 py-4 rounded-full bg-gradient-to-b from-[#693FFFFC] to-[#C02EE5] text-[#E7F4FD] font-medium">
              <p>Start For Free</p>{" "}
              <span className="hidden md:block text-[#E7F4FD] text-[12px] tracking-tighter">
                No Credit Card Required
              </span>
            </button>
          </div>
          <p className="text-[#DEDEDE] text-xs mt-4">
            By proceeding you agree to our Platform terms & Privacy Notice
          </p>
        </div>
        {/* Stats Box  */}
        <div className="max-w-7xl mx-auto mt-12 md:mt-20 py-8 rounded-[40px] border-2 border-[#505152] ">
          {/* Stats Card */}
          <div className="px-6">
            <div className="mb-12 flex flex-col md:flex-row gap-4 justify-between">
              <h2 className="text-white text-xl sm:text-3xl font-semibold text-left">
                Sell from day one - even with zero audience
              </h2>
              <button className="btn p-6 border rounded-full text-white text-[16px]">
                Open calculator
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
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

          {/* Marquee */}
          <div className="mt-10 bg-[#FFF3D8] overflow-hidden whitespace-nowrap py-3">
            <motion.div
              animate={{ x: [0, -800] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="text-[#695F4C] text-sm md:text-[20px] font-medium inline-block"
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
