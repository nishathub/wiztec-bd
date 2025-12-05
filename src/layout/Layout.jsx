import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/NavBar";

const Layout = () => {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Navbar></Navbar>
        <div className="mt-16 flex-grow bg-white text-black">
          <ScrollToTop></ScrollToTop>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Layout;