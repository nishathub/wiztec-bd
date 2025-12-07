import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";

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
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar></Navbar>
        <div className="mt-16 flex-grow text-black">
          <ScrollToTop></ScrollToTop>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layout;