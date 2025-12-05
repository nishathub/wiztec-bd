import { Bed, Bath, MoveHorizontal } from "lucide-react";

const PropertyCard = ({
  name,
  price_per_week,
  location,
  bedrooms,
  bathrooms,
  area_sqft,
  image_url
}) => {
  return (
    <div className="w-full max-w-[380px] md:max-w-[430px] rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 text-[#7E8B9C] bg-white">
      {/* Image */}
      <div className="w-full h-52 md:h-[260px]">
        <img
          src={image_url}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="p-4 space-y-3">

        {/* Icons Row */}
        <div className="flex items-center justify-start gap-5 text-sm">
          <div className="flex items-center gap-1">
            <Bed size={16} />
            <span>Bed - {bedrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath size={16} />
            <span>Bathroom - {bathrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <MoveHorizontal size={16} />
            <span>{area_sqft}sqft</span>
          </div>
        </div>

        {/* Property Name */}
        <h2 className="text-lg font-semibold text-black">{name}</h2>

        {/* Price + Location */}
        <div className="flex items-center gap-2 text-sm">
          <span className="text-black font-medium">${price_per_week}<span className="text-[#7E8B9C]">/week</span></span>
          <span className=""></span>
          <span className="">{location}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
