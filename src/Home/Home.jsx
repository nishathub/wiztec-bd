import PropertyCard from "../components/Property-Card/PropertyCard";
import "./homeStyle.css";
import data from "../../public/property.json";

const Home = () => {
  return (
    <div className=" max-w-7xl w-full mx-auto flex">
      {/* Left  */}
      <div className="hidden lg:flex w-[340px] p-6 border">left</div>
      {/* Right  */}
      <div className=" border">
        <div className="grid md:grid-cols-2 gap-6 p-6">
          {data.map((item, idx) => (
            <PropertyCard key={idx} {...item}></PropertyCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
