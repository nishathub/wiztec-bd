import { IoMenu } from "react-icons/io5";
import { CgMenuMotion } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SideNavbar from "./SideNavbar";
import WizLogo from "../Logo/WizLogo";

const Navbar = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const navMenuRef = useRef();

  // hide absolute boxes when click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navMenuRef.current && !navMenuRef.current.contains(e.target)) {
        setMenuActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = (
    <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 text-[#434953] text-[16px]">
      <NavLink to={"/"}>Buy</NavLink>
      <NavLink to={"/rent"}>Rent</NavLink>
      <NavLink to={"/sell"}>Sell</NavLink>
      <NavLink to={"/agents"}>Agents</NavLink>
      <NavLink to={"/blogs"}>Blogs</NavLink>
      <NavLink to={"/contact"}>Contact Us</NavLink>
    </div>
  );

  return (
    <div className={`bg-white h-16 w-full fixed top-0 z-10`}>
      <div className="navbar max-w-7xl mx-auto md:px-4 px-1 flex justify-between items-center h-full my-auto">
        {/* ABSOLUTE MENU  */}
        <SideNavbar
          navMenuRef={navMenuRef}
          isMenuActive={isMenuActive}
          navLinks={navLinks}
        ></SideNavbar>

        {/* LEFT  */}
        <div className="flex gap-2 items-center w-60">
          {/* NAV-ICON FOR SMALL DEVICE  */}
          <div className="lg:hidden pt-1">
            <button
              onClick={() => setMenuActive(!isMenuActive)}
              className="text-3xl text-black"
            >
              {isMenuActive ? <CgMenuMotion /> : <IoMenu />}
            </button>
          </div>
          <Link className="w-8 lg:w-12 rounded-full" to={"/"}>
            <WizLogo></WizLogo>
          </Link>
        </div>
        {/* MIDDLE  */}
        <div className="hidden lg:flex justify-center items-center gap-2 text-gray-100  tracking-wider">
          {navLinks}
        </div>
        {/* RIGHT  */}
        <div className="justify-end flex items-center gap-4">
            <Link className="hidden lg:inline-block" to={"/wish-list"}>
              <button className="flex items-center gap-2 text-[#434953] text-[16px]">
                <p>
                  <CiHeart />
                </p>{" "}
                <p>Favourite</p>
              </button>
            </Link>
            <Link className="hidden lg:inline-block" to={"/login"}>
              <button className="bg-[#6C0443] hover:bg-[#b80771] transition-colors duration-300 text-white font-semibold px-4 py-3 w-[105px] rounded-[100px]">
                Login
              </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
