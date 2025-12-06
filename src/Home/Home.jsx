import "./homeStyle.css";
import data from "../../public/property.json";
import PropertyCollection from "../components/Property-Display/PropertyCollection";
import PropertyFilter from "../components/Property-Display/PropertyFilter";
import { useState } from "react";

const Home = () => {
  const [filters, setFilters] = useState({
    budget: { min: 300, max: 670000 },
    suburbs: [
      "Eshelby Drive, Cranbrook",
      "2–6 Eshelby Dr, Cannonvale",
      "59/3 Eshelby Drive Cannonvale",
    ],
    types: ["House", "Land", "Apartment", "Town House", "Villa", "Acreage"],
    amenities: ["Pet-friendly", "Parking", "Private Pool"],

    selected: {
      budget: { min: 300, max: 670000 },
      suburb: [],
      type: [],
      amenities: [],
    },
  });

  return (
    <div className=" max-w-7xl w-full mx-auto flex">
      {/* Left  */}
      <div className="hidden lg:flex w-[340px] p-6 border">
        <PropertyFilter data={filters} onChange={setFilters}></PropertyFilter>
      </div>
      {/* Right  */}
      <div className=" border">
        <PropertyCollection data={data}></PropertyCollection>
      </div>
    </div>
  );
};

export default Home;
