import React from "react";

const DualRangeSlider = ({ min, max, values, onChange, color = "#6C0443" }) => {
  const handleMin = (e) => {
    const newMin = Number(e.target.value);
    if (newMin <= values.max) {
      onChange({ ...values, min: newMin });
    }
  };

  const handleMax = (e) => {
    const newMax = Number(e.target.value);
    if (newMax >= values.min) {
      onChange({ ...values, max: newMax });
    }
  };

  const pctMin = ((values.min - min) / (max - min)) * 100;
  const pctMax = ((values.max - min) / (max - min)) * 100;

  return (
    <div className="relative w-full mt-4">
      {/* Track Background */}
      <div className="w-full h-[6px] bg-gray-300 rounded-full" />

      {/* Highlighted Range */}
      <div
        className="absolute h-[6px] rounded-full top-0"
        style={{
          left: `${pctMin}%`,
          width: `${pctMax - pctMin}%`,
          backgroundColor: color,
        }}
      />

      {/* Min Thumb */}
      <input
        type="range"
        min={min}
        max={max}
        value={values.min}
        onChange={handleMin}
        className="absolute -top-1 w-full pointer-events-none appearance-none bg-transparent"
        style={{ zIndex: values.min === values.max ? 5 : 3 }}
      />

      {/* Max Thumb */}
      <input
        type="range"
        min={min}
        max={max}
        value={values.max}
        onChange={handleMax}
        className="absolute -top-1 w-full pointer-events-none appearance-none bg-transparent"
        style={{ zIndex: 4 }}
      />

      {/* Thumb Style */}
      <style>{`
        input[type="range"] {
          --thumb-size: 18px;
        }

        input[type="range"]::-webkit-slider-thumb {
          pointer-events: auto;
          appearance: none;
          height: var(--thumb-size);
          width: var(--thumb-size);
          border-radius: 50%;
          background: ${color};
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 0 4px rgba(0,0,0,0.3);
        }

        input[type="range"]::-moz-range-thumb {
          height: var(--thumb-size);
          width: var(--thumb-size);
          border-radius: 50%;
          background: ${color};
          cursor: pointer;
          border: 3px solid white;
        }
      `}</style>
    </div>
  );
};

export default DualRangeSlider;
