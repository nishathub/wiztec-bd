import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen text-center px-4 bg-white text-white">
      <div>
        <h1 className="text-3xl lg:text-6xl font-bold text-red-800">404</h1>
        <h2 className="text-2xl lg:text-3xl mt-4 font-semibold text-black">Page Not Found</h2>
        <p className="mt-2 text-black">Sorry, the page you are looking for does not exist.</p>
        <Link to={"/"}
          className="mt-6 inline-block px-6 py-3 bg-[#6C0443] hover:bg-[#b80771] transition-colors duration-300 text-white rounded-md"
        >
          Go to Homepage
        </Link>

      </div>
    </div>
  );
};

export default NotFound;