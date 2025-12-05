import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const [isPasswordShown, setPasswordShown] = useState(false);
  return (
    <div className="w-full">
      <div className="mb-4 flex items-center gap-4">
        <p className="border-t border-[#DFE2E6] flex-grow"></p>
        <p className="">Or</p>
        <p className="border-t border-[#DFE2E6] flex-grow"></p>
      </div>
      <form className="space-y-4 lg:space-y-6">
        <div className="relative">
          <label className="absolute left-4 top-1">
            <p className="text-[12px] text-[#42526D]">Email</p>
          </label>
          <input
            className="w-full px-4 pt-6 pb-2 rounded-[8px] bg-[#F5F6F7] focus:outline-none border border-[#DFE2E6] text-[16px]"
            type="email"
            name="email"
            required
          />
        </div>
        <div className="relative">
          <button
            onClick={() => setPasswordShown(!isPasswordShown)}
            className="absolute right-5 top-1/3"
          >
            {!isPasswordShown ? (
              <p>
                <FaRegEye className="text-[#94A3B8] w-[22px]"></FaRegEye>
              </p>
            ) : (
              <p>
                <FaRegEyeSlash className="text-[#94A3B8] w-[22px]"></FaRegEyeSlash>
              </p>
            )}
          </button>
          <label className="absolute left-4 top-1">
            <p className="text-[12px] text-[#42526D]">Password</p>
          </label>
          <input
            className="w-full px-4 pt-6 pb-2 rounded-[8px] bg-[#F5F6F7] focus:outline-none border border-[#DFE2E6]"
            type={isPasswordShown ? "text" : "password"}
            name="password"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox border" />
              </label>
            </div>
            <p className="text-[16px]">Remember me</p>
          </div>
          <a className="underline" href="#">
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
