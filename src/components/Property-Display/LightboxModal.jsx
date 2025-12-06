import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const LightboxModal = ({ open, slides, currentIndex, onClose, }) => {
  return (
    <div>
      <div className={` ${open ? "absolute" : "hidden"} bg-black/30 inset-0`}>

      </div>
      <Lightbox
        open={open}
        close={onClose}
        slides={slides}
        index={currentIndex}
        plugins={[Thumbnails]}
        thumbnails={{
          position: "bottom",
          width: 120,
          height: 80,
          padding: 8,
          gap: 16,
          imageFit: "cover",
          vignette: false,
        }}
      />
    </div>
  );
};

export default LightboxModal;
