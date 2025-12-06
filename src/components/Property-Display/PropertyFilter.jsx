import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function PropertyFilter({ data, onChange }) {
  const [open, setOpen] = useState({
    budget: true,
    suburb: true,
    type: true,
    amenities: true,
  });
  const toggle = (key) => setOpen((p) => ({ ...p, [key]: !p[key] }));

  const handleRange = (min, max) => {
    onChange((prev) => ({
      ...prev,
      selected: {
        ...prev.selected,
        budget: { min, max },
      },
    }));
  };

  return (
    <div className="w-[340px] space-y-4 p-3">
      {/* Budget */}
      <Box
        title="Rent Budget"
        isOpen={open.budget}
        onToggle={() => toggle("budget")}
      >
        <div className="flex flex-col gap-4">
          <input
            type="range"
            min={data.budget.min}
            max={data.budget.max}
            value={data.selected.budget.min}
            onChange={(e) =>
              handleRange(Number(e.target.value), data.selected.budget.max)
            }
          />
          <input
            type="range"
            min={data.budget.min}
            max={data.budget.max}
            value={data.selected.budget.max}
            onChange={(e) =>
              handleRange(data.selected.budget.min, Number(e.target.value))
            }
          />
          <div className="flex justify-between text-sm">
            <div>
              Minimum
              <br />${data.selected.budget.min}
            </div>
            <div>
              Maximum
              <br />${data.selected.budget.max}
            </div>
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
}

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
