import { useCallback, useState } from "react";
import PropertyCard from "./PropertyCard";
import LightboxModal from "./LightboxModal";

const PropertyCollection = ({ data }) => {
  const slides = data.map((item) => ({ src: item.image_url}));
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
