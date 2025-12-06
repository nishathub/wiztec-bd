import "./homeStyle.css";
import data from "../../public/property.json";
import PropertyCollection from "../components/Property-Display/PropertyCollection";
import PropertyFilter from "../components/Property-Display/PropertyFilter";
import PropertyComponent from "../components/Property-Display/PropertyComponent";

const Home = () => {
  return (
    <div className="">
      <PropertyComponent></PropertyComponent>
    </div>
  );
};

export default Home;
