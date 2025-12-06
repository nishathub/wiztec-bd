import { useState } from "react";
import WizLogo from "../components/Logo/WizLogo";
import LoginForm from "../components/LoginForm/LoginForm";

const Login = () => {
  const [isManualLogin, setManualLogin] = useState(false);
  const bgImageURL = "https://res.cloudinary.com/dntewbvod/image/upload/v1765033427/city-height_m3kafv.png";
  const AuthButton = ({ onClick, source, altText, providerName }) => {
    return (
      <button
        onClick={onClick}
        className="py-3 md:py-4 border border-[#DFE2E6] rounded-[8px] flex items-center justify-center w-full text-center gap-3 md:gap-4 hover:shadow-md transition-shadow duration-300"
      >
        <img className="w-[20px] md:w-[25px]" src={source} alt={altText} />
        <p className="text-[#42526D] text-[16px] leading-[150%]">
          Continue with {providerName}
        </p>
      </button>
    );
  };
  return (
    <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-5 items-center gap-12 p-4 md:p-0 text-black">
      {/* Login Box  */}
      <div className="md:col-span-2 flex flex-col items-center gap-4">
        <WizLogo></WizLogo>
        <div className="text-center">
          <h2 className="text-[24px] md:text-[32px] font-semibold ">
            Create New Account
          </h2>
          <p className="text-[14px] md:text-[16px] leading-[150%]">
            Let's login to grab amazing deal
          </p>
        </div>
        <AuthButton
          source="https://res.cloudinary.com/dntewbvod/image/upload/v1765033413/google_gjggfc.png"
          altText="google-icon"
          providerName="Google"
        ></AuthButton>
        <AuthButton
          source="https://res.cloudinary.com/dntewbvod/image/upload/v1765033411/apple_nfo1v7.png"
          altText="apple-icon"
          providerName="Apple"
        ></AuthButton>
        {!isManualLogin && (
          <AuthButton
            onClick={() => setManualLogin(true)}
            source="https://res.cloudinary.com/dntewbvod/image/upload/v1765033412/Vector-email-phone_yemj6e.png"
            altText="phone-icon"
            providerName="Email/Phone"
          ></AuthButton>
        )}
        {isManualLogin && <LoginForm></LoginForm>}

        <p className="text-[14px] md:text-[16px] font-[500]">
          Don't have an account?{" "}
          <a href="#" className="text-[#59344F]">
            Sign Up
          </a>
        </p>
      </div>

      {/* City Image  */}
      <div className="hidden md:col-span-3 md:flex items-center justify-center">
        <div className="relative w-5/6">
          <img className="w-full" src={bgImageURL} alt="city-tower" />
          <p className="absolute top-10 right-16 text-right w-60 lg:w-80 text-white font-semibold">Browse thousands of properties to buy, sell, or rent with trusted agents.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
