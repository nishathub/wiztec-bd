import { motion } from "framer-motion";

const EllipseHeroBanner = () => {
  const starDot = (className) => {
    return (
      <div className={`${className} absolute w-[6px] h-[6px] bg-white rounded-full`}></div>
    )
  }
  return (
    <div className="relative w-full flex justify-center items-center min-h-[90vh] bg-[#2A0019] overflow-hidden px-4">
      
      {/* Blur Effect  */}
      {/* left  */}
      <div className="absolute top-[16%] left-[14%] w-72 h-80 bg-[#fff5d2] opacity-40 rounded-full blur-[90px]" />
      <div className="absolute top-[36%] left-[8%] w-32 h-40 bg-[#99beff] opacity-80 rounded-full blur-[90px]" />
      {/* Right  */}
      <div className="absolute top-[2%] right-[8%] w-72 h-80 bg-[#fff5d2] opacity-40 rounded-full blur-[90px]" />
      <div className="absolute top-[30%] right-[5%] w-72 h-80 bg-[#925853] opacity-40 rounded-full blur-[90px]" />
      
      {/* Small Star-like Dots */}
      {/* Left */}
      {starDot('top-[15%] left-[10%]')}
      {starDot('top-[25%] left-[15%]')}
      {starDot('top-[35%] left-[12%] opacity-40')}
      {starDot('top-[55%] left-[22%] opacity-40')}
      {/* Right  */}
      {starDot('top-[8%] right-[14%]')}
      {starDot('top-[28%] right-[20%] opacity-60')}
      {starDot('top-[50%] right-[14%]')}

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full text-center py-12">
        <button className="px-5 py-2 rounded-full bg-[#1B162699] text-white text-sm border border-white/20 backdrop-blur-md">
          BUILD FOR YOU
        </button>

        <h2 className="mt-2 font-extrabold text-4xl sm:text-5xl md:text-7xl">
          <span className="bg-gradient-to-r from-white to-[#A5C5DD] bg-clip-text text-transparent">
            Built for Creators.
          </span>
          <br />
          <span className="bg-gradient-to-r from-white to-[#A5C5DD] bg-clip-text text-transparent">
            Powered for Profit
          </span>
        </h2>

        <p className="text-white/80 mt-4 max-w-xl mx-auto text-sm sm:text-base">
          Create and sell courses, consulting services, and communities — with
          Zero marketing cost and a built-in sales network.
        </p>

        {/* Email Input */}
        <div className="mt-6 flex justify-center gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter Your Email Here"
            className="input input-bordered w-full rounded-full bg-white/10 border-white/20 text-white placeholder-white/60 backdrop-blur-md"
          />
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-[#b159ff] to-[#5aa4ff] text-white font-medium shadow-lg whitespace-nowrap">
            Start for Free
          </button>
        </div>

        <p className="text-white/40 text-xs mt-2">
          By proceeding you agree to our Platform terms & Privacy Notice
        </p>

        {/* Stats Card */}
        <div className="mt-16 p-6 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl max-w-7xl mx-auto">
          <h2 className="text-white text-xl sm:text-2xl font-semibold mb-6 text-left">
            Sell from day one - even with zero audience
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <h3 className="text-white text-3xl font-bold">21,500+</h3>
              <p className="text-white/60 text-sm">People who can co-promote</p>
            </div>

            <div>
              <h3 className="text-white text-3xl font-bold">86</h3>
              <p className="text-white/60 text-sm">
                With zero personal audience
              </p>
            </div>

            <div>
              <h3 className="text-white text-3xl font-bold">US$774</h3>
              <p className="text-white/60 text-sm">From membership sales</p>
            </div>

            <div>
              <h3 className="text-white text-3xl font-bold">US$300</h3>
              <p className="text-white/60 text-sm">Just by co-selling</p>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="mt-10 overflow-hidden whitespace-nowrap border-t border-white/10 py-3">
          <motion.div
            animate={{ x: [0, -800] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="text-white/80 text-sm inline-block"
          >
            Unlike Kajabi, Teachable, or Skool, Growhubs helps you find and
            convert clients inside the platform &nbsp; • &nbsp; Unlike Kajabi,
            Teachable, or Skool, Growhubs helps you find and convert clients
            inside the platform
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EllipseHeroBanner;
