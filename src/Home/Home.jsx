import "./homeStyle.css";
import PropertyComponent from "../components/Property-Display/PropertyComponent";
import EllipseHeroBanner from "../components/EllipseHeroBanner/EllipseHeroBanner";

const Home = () => {
  return (
    <div className="bg-white">
      <PropertyComponent></PropertyComponent>
      <EllipseHeroBanner></EllipseHeroBanner>
    </div>
  );
};

export default Home;
