"use client";
import React from "react";
import MapComponent from "../../components/MapComponent";
// import GMapComponent from "@components/Map";

function page() {
  const source = [51.505, -0.09]; // Coordinates for source
  const dire_points = [
    [51.51, -0.1], // Sample points
    [51.52, -0.12],
    [51.53, -0.09],
  ];
  const dest = [51.515, -0.075]; // Coordinates for destination

  return (
    <div>
      {/* <h1>Map with Route</h1> */}
      <MapComponent source={source} points={dire_points} destination={dest} />
    </div>
  );
}

export default page;
