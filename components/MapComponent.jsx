// components/MapComponent.js

import React from "react";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";

const MapComponent = ({ source, points, destination }) => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={source} />
      {points.map((point, index) => (
        <Marker key={index} position={point} />
      ))}
      <Marker position={destination} />
      <Polyline positions={[source, ...points, destination]} color="blue" />
    </MapContainer>
  );
};

export default MapComponent;
