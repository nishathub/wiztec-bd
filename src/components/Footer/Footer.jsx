import SocialLogo from "./SocialLogo";

const Footer = () => {
  return (
    <div className="w-full rounded-t-[40px] bg-gradient-to-b from-[#251621] to-[#42233A] px-8">
      <footer className="footer sm:footer-horizontal max-w-7xl mx-auto pt-16 items-start justify-between">
        <nav>
          <h6 className="font-semibold mb-2 text-xl md:text-[28px]">
            About Us
          </h6>
          <a className="md:text-[20px] md:leading-[150%]">Resources</a>
          <a className="md:text-[20px] md:leading-[150%]">Company</a>
          <a className="md:text-[20px] md:leading-[150%]">Property</a>
          <a className="md:text-[20px] md:leading-[150%]">Contact Us</a>
        </nav>
        <nav>
          <h6 className="font-semibold mb-2 text-xl md:text-[28px]">
            Contact Us
          </h6>
          <a className="md:text-[20px] md:leading-[150%]">
            hello abc@gmail.com
          </a>
          <a className="md:text-[20px] md:leading-[150%]">+012233455667</a>
        </nav>
        <nav>
          <h6 className="font-semibold mb-2 text-xl md:text-[28px]">
            Follow Us
          </h6>
          <div className="">
            <SocialLogo></SocialLogo>
          </div>
        </nav>
      </footer>
      <div className="max-w-7xl mx-auto mt-8 sm:mt-0">
        <p className="sm:text-right text-[16px] text-[#EEEBED] leading[150%]">
          © 2025 Havenix. All rights reserved.
        </p>
      </div>
      <div className="text-[14vw] md:text-[16vw] pt-16 text-center alexandria-600 leading-[1.2] bg-gradient-to-r from-[#8A7384] via-[#CAC3C3] to-[#CAC3C3] bg-clip-text text-transparent tracking-wider">
        <h4>WiztecBD</h4>
      </div>
    </div>
  );
};

export default Footer;
