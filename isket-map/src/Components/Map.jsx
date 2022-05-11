import React from 'react';
import { MapContainer as Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Maps() {
  const mapInfos = {
    location: { lat: 42.546245, lng: 1.601554 },
    zoom: 8,
  };

  return (

    <Map
      center={mapInfos.location}
      zoom={mapInfos.zoom}
      style={{ height: '100vh', width: '100vw' }}
    >
      <TileLayer
        url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
    </Map>
  );
}

export default Maps;
