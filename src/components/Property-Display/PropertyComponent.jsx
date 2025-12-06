import data from "../../../public/property.json";
import PropertyCollection from "./PropertyCollection";
import PropertyFilter from "./PropertyFilter";

const PropertyComponent = () => {
  return (
    <div className="max-w-7xl w-full mx-auto flex">
      {/* Left  */}
      <div className="hidden lg:flex w-[340px]">
        <PropertyFilter></PropertyFilter>
      </div>
      {/* Right  */}
      <div className=" ">
        <PropertyCollection data={data}></PropertyCollection>
      </div>
    </div>
  );
};

export default PropertyComponent;
