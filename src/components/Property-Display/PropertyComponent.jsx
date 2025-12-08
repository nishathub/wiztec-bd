import data from "../../../public/property.json";
import Pagination from "../Pagination/Pagination";
import PropertyCollection from "./PropertyCollection";
import PropertyFilter from "./PropertyFilter";

const PropertyComponent = () => {
  return (
    <div className="max-w-7xl w-full mx-auto flex justify-center">
      {/* Left  */}
      <div className="hidden lg:flex w-[340px]">
        <PropertyFilter></PropertyFilter>
      </div>
      {/* Right  */}
      <div className="">
        <PropertyCollection data={data}></PropertyCollection>
        <Pagination></Pagination>
      </div>
    </div>
  );
};

export default PropertyComponent;
