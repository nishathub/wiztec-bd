import "./homeStyle.css";
import data from "../../public/property.json";
import PropertyCollection from "../components/Property-Display/PropertyCollection";

const Home = () => {
  return (
    <div className=" max-w-7xl w-full mx-auto flex">
      {/* Left  */}
      <div className="hidden lg:flex w-[340px] p-6 border">left</div>
      {/* Right  */}
      <div className=" border">
        <PropertyCollection data={data}></PropertyCollection>
      </div>
    </div>
  );
};

export default Home;
