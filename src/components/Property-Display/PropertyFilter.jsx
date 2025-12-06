import React, { useState } from "react";
import { ChevronDown, ChevronUp, RotateCcw } from "lucide-react";
import DualRangeSlider from "./DualRangeSlider";

const PropertyFilter = () => {
  const [data, onChange] = useState({
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

  const [open, setOpen] = useState({
    budget: true,
    suburb: true,
    type: true,
    amenities: true,
  });
  const toggle = (key) => setOpen((p) => ({ ...p, [key]: !p[key] }));

  return (
    <div className="w-[340px] space-y-4 p-3">
      {/* Reset Box */}
      <div className="border rounded-xl p-3 bg-white shadow-sm flex items-center justify-between">
        <p className="text-[16px] font-[500]">Property Preference</p>
        <button className="py-4 px-2 bg-[#F4F6F8] hover:bg-[#d0d0d0] transition-colors duration-300 rounded-lg flex items-center gap-2">
          <p className="text-[14px] text-[#434953] font-[500] tracking-tight">
            Reset Filter
          </p>{" "}
          <span><RotateCcw size={18}/></span>
        </button>
      </div>
      {/* Budget */}
      <Box
        title="Rent Budget"
        isOpen={open.budget}
        onToggle={() => toggle("budget")}
      >
        <DualRangeSlider
          min={data.budget.min}
          max={data.budget.max}
          values={data.selected.budget}
          onChange={(budget) =>
            onChange((prev) => ({
              ...prev,
              selected: { ...prev.selected, budget },
            }))
          }
          color="#6C0443"
        />

        <div className="grid grid-cols-2 gap-4 text-sm mt-4">
          <div className="py-2 px-4 border border-gray-200 rounded-lg bg-[#F4F6F8] text-center">
            <div className="text-[#697483] text-[12px]">Minimum</div>
            <span className="text-[16px] font-[500] text-black">
              ${data.selected.budget.min}
            </span>
          </div>
          <div className="py-2 px-4 border border-gray-200 rounded-lg bg-[#F4F6F8] text-center">
            <div className="text-[#697483] text-[12px]">Maximum</div>
            <span className="text-[16px] font-[500] text-black">
              ${data.selected.budget.max}
            </span>
          </div>
        </div>
      </Box>

      {/* Suburb */}
      <Box
        title="Suburb"
        isOpen={open.suburb}
        onToggle={() => toggle("suburb")}
      >
        <div className="flex flex-col gap-2">
          {data.suburbs.map((s) => (
            <label key={s} className="flex gap-2 items-center">
              <input type="checkbox" className="checkbox checkbox-sm border" />
              {s}
            </label>
          ))}
        </div>
      </Box>

      {/* Property Type */}
      <Box
        title="Property Type"
        isOpen={open.type}
        onToggle={() => toggle("type")}
      >
        <div className="flex flex-col gap-2">
          {data.types.map((t) => (
            <label key={t} className="flex gap-2 items-center">
              <input type="checkbox" className="checkbox checkbox-sm border" />
              {t}
            </label>
          ))}
        </div>
      </Box>

      {/* Amenities */}
      <Box
        title="Amenities"
        isOpen={open.amenities}
        onToggle={() => toggle("amenities")}
      >
        <div className="flex flex-col gap-2">
          {data.amenities.map((a) => (
            <label key={a} className="flex gap-2 items-center">
              <input type="checkbox" className="checkbox checkbox-sm border" />
              {a}
            </label>
          ))}
        </div>
      </Box>
    </div>
  );
};

const Box = ({ title, isOpen, onToggle, children }) => {
  return (
    <div className="border rounded-xl p-3 bg-white shadow-sm">
      <button
        className="w-full flex justify-between items-center font-semibold text-md border-b pb-2"
        onClick={onToggle}
      >
        {title}
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      {isOpen && <div className="pt-3">{children}</div>}
    </div>
  );
};

export default PropertyFilter;
