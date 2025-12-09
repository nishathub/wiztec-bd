import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

const SideNavbar = ({ navMenuRef, isMenuActive, navLinks }) => {
  return (
    <div
      ref={navMenuRef}
      className={`absolute p-4 space-y-4 lg:hidden overflow-y-auto ${
        isMenuActive
          ? "opacity-100 translate-x-0 pointer-events-auto"
          : "opacity-0 -translate-x-10 pointer-events-none"
      } duration-300 top-[60px] left-0 w-[240px] h-[calc(100vh-60px)] bg-white items-start`}
    >
      <div className="flex flex-col gap-3 w-fit">
        {navLinks}

        <Link to={"/wish-list"}>
          <button className="flex items-center gap-1 text-[#434953] hover:text-[#6C0443]">
            <p>
              <CiHeart />
            </p>{" "}
            <p>Favourite</p>
          </button>
        </Link>
        <Link to={"/auth/login"}>
          <button className="bg-[#6C0443] hover:bg-[#b80771] transition-colors duration-300 text-white font-semibold px-4 py-3 w-fit rounded-md">
            Login Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SideNavbar;
