import WizLogo from "../components/Logo/WizLogo";

const Login = () => {
  const AuthButton = ({ source, altText, providerName }) => {
    return (
      <div className="py-4 border border-[#DFE2E6] rounded-[8px] flex items-center gap-4">
        <img className="w-[25px]" src={source} alt={altText} />
        <p className="text-[#42526D] text-[16px] leading-[150%]">
          Continue with {providerName}
        </p>
      </div>
    );
  };
  return (
    <div className="max-w-7xl w-full mx-auto grid grid-col-1 lg:grid-cols-5 border text-black">
      {/* Login Box  */}
      <div className="lg:col-span-2">
        <WizLogo></WizLogo>
        <h2 className="text-[32px] font-semibold ">Create New Account</h2>
        <p className="text-[16px] leading-[150%]">
          Let's login to grab amazing deal
        </p>
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
        <AuthButton
          source="../../src/assets/Images/LoginPage/Vector-email-phone.png"
          altText="phone-icon"
          providerName="Email/Phone"
        ></AuthButton>
        
      </div>

      {/* City Image  */}
      <div className="sm:col-span-2 lg:col-span-3">Right</div>
    </div>
  );
};

export default Login;
