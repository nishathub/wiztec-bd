import { useState } from "react";
import WizLogo from "../components/Logo/WizLogo";
import LoginForm from "../components/LoginForm/LoginForm";

const Login = () => {
  const [isManualLogin, setManualLogin] = useState(false);
  const bgImageURL = "../../src/assets/Images/LoginPage/city-tower.jpg";
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
    <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 items-center gap-12 p-4 md:p-0 text-black">
      {/* Login Box  */}
      <div className="md:col-span-2 flex flex-col items-center gap-4">
        <WizLogo></WizLogo>
        <div className="text-center">
          <h2 className="text-[24px] md:text-[32px] font-semibold ">Create New Account</h2>
          <p className="text-[14px] md:text-[16px] leading-[150%]">
            Let's login to grab amazing deal
          </p>
        </div>
        <AuthButton
          source="../../src/assets/Images/LoginPage/google.png"
          altText="google-icon"
          providerName="Google"
        ></AuthButton>
        <AuthButton
          source="../../src/assets/Images/LoginPage/apple.png"
          altText="apple-icon"
          providerName="Apple"
        ></AuthButton>
        {!isManualLogin && (
          <AuthButton
            onClick={() => setManualLogin(true)}
            source="../../src/assets/Images/LoginPage/Vector-email-phone.png"
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
      <div className="hidden md:col-span-2 lg:col-span-3 md:flex items-center justify-center">
        <img className="w-5/6" src={bgImageURL} alt="city-tower" />
      </div>
    </div>
  );
};

export default Login;
