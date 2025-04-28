"use client";
import { useState } from "react";

export default function MapWithSearch() {
  const [location, setLocation] = useState("Lahore");

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(location)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <input
        type="text"
        value={location}
        onChange={handleChange}
        placeholder="Enter a location"
        className="border rounded p-2 w-80"
      />
      <div className="w-full flex justify-center">
        <iframe
          title="Google Maps"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src={mapSrc}
        ></iframe>
      </div>
    </div>
  );
}
