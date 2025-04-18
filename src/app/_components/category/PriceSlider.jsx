"use client";
import { useState } from "react";
import { Range } from "react-range";

const PriceSlider = ({ onChange }) => {
    const [values, setValues] = useState([100, 800]); // Initial Min & Max
  
    const handlePriceChange = (newValues) => {
      clearTimeout(window.priceSliderTimeout); // Clear any previous timeout
      window.priceSliderTimeout = setTimeout(() => {
        setValues(newValues);
        onChange?.(newValues[0], newValues[1]); // Pass min & max values to parent
        console.log("Updated values after delay:", newValues);
      }, 700);
    };
    

  return (
    <>
    {/* Large Devices */}
    <div className="hidden lg:block pt-2 bg-white p-3">
     <h1 className='text-lg text-primary text-left thin-border-bottom mb-5 pb-3'>Select Price Range</h1>
      <p className="text-sm mb-2 text-primary">
        <strong>Min:</strong> ${values[0]} &nbsp;&nbsp; <strong>Max:</strong> ${values[1]}
      </p>
      <div>  
      <Range
        step={10}
        min={100}
        max={800}
        values={values}
        onChange={handlePriceChange}
        renderTrack={({ props, children }) => {
          const { key, ...restProps } = props; // 🛠 Remove key from props
          return (
            <div key={key} {...restProps} className="w-full h-2 bg-primary rounded-md">
              {children}
            </div>
          );
        }}
        renderThumb={({ props }) => {
          const { key, ...restProps } = props; // 🛠 Remove key from props
          return (
            <div
              key={key}
              {...restProps}
              className="w-5 h-5 bg-secondary rounded-full shadow-md cursor-pointer"
            />
          );
        }}
      />
      </div>
    </div>

     {/* Mobile Devices Devices */}
     <div className="lg:hidden pt-2 bg-white w-full max-w-sm mb-4 tex-sm ">
     
      <p className="text-sm mb-2 text-primary">
        <strong>Min:</strong> ${values[0]} &nbsp;&nbsp; <strong>Max:</strong> ${values[1]}
      </p>
      <div>      <Range
        step={10}
        min={100}
        max={1000}
        values={values}
        onChange={handlePriceChange}
        renderTrack={({ props, children }) => {
          const { key, ...restProps } = props; // 🛠 Remove key from props
          return (
            <div key={key} {...restProps} className="w-full h-2 bg-primary rounded-md">
              {children}
            </div>
          );
        }}
        renderThumb={({ props }) => {
          const { key, ...restProps } = props; // 🛠 Remove key from props
          return (
            <div
              key={key}
              {...restProps}
              className="w-5 h-5 bg-secondary rounded-full shadow-md cursor-pointer"
            />
          );
        }}
      />
      </div>

    </div>
    </>
  );
};

export default PriceSlider;
