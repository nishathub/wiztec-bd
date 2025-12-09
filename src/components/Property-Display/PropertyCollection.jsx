import { useCallback, useState } from "react";
import PropertyCard from "./PropertyCard";
import LightboxModal from "./LightboxModal";
import { Funnel } from "lucide-react";
import PropertyFilter from "./PropertyFilter";

const PropertyCollection = ({ data }) => {
  const slides = data.map((item) => ({ src: item.image_url }));
  const [currentKey, setCurrentKey] = useState(0);
  const [lightboxState, setLightboxState] = useState({
    open: false,
    slides: [],
  });

  const openLightbox = useCallback((slidesArray) => {
    setLightboxState({
      open: true,
      slides: slidesArray,
    });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxState((prev) => ({
      ...prev,
      open: false,
      slides: [],
    }));
  }, []);

  return (
    <div>
      {/* Sort box  */}
      <div className="p-2 mt-3 mx-5 border border-gray-200 rounded-xl bg-white shadow-sm">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          {/* Left */}
          <div className="text-left">
            <span className="font-bold text-[18px] sm:text-[20px] leading-[150%] ">
              Property
            </span>

            <span className="ml-2 text-[14px] sm:text-[16px] font-[500] leading-[150%] text-[#697483]">
              --- Showing result- (12)
            </span>
          </div>

          {/* Right */}
          <div className="flex flex-col bg-[#F4F6F8] rounded-lg px-2 py-1 w-full sm:w-auto">
            <span className="text-[12px] text-[#697483] text-left hidden sm:inline">
              Sort By
            </span>

            <select
              className="select w-full text-[14px] sm:text-[16px] font-semibold pr-10 bg-[#F4F6F8] focus:outline-none"
              defaultValue="Low to High"
            >
              <option value="Low to High">Low to High</option>
              <option value="High to Low">High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Small Screen FIlter */}
      <div className="drawer drawer-end">
        <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer-5"
            className="lg:hidden drawer-button ml-6 mt-2 btn bg-[#6C0443] hover:bg-[#b80771] text-white transition-colors duration-300"
          >
            <p>Filter</p>{" "}
        <span>
          <Funnel size={16} />
        </span>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-5"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu mt-12 z-30 bg-white min-h-full w-[340px] p-4">
            <PropertyFilter></PropertyFilter>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 p-6">
        {data.map((item, idx) => (
          <PropertyCard
            openLightbox={openLightbox}
            slides={slides}
            setCurrentKey={setCurrentKey}
            key={idx}
            index={idx}
            {...item}
          ></PropertyCard>
        ))}
      </div>

      <LightboxModal
        open={lightboxState.open}
        slides={lightboxState.slides}
        currentIndex={currentKey}
        onClose={closeLightbox}
      />
    </div>
  );
};

export default PropertyCollection;
