import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

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
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <ScrollToTop></ScrollToTop>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Layout;