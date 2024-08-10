// src/components/MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for missing marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

function LocationMarker() {
  const [position, setPosition] = React.useState(null);

  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>
        You clicked the map at <br /> {position.lat}, {position.lng}
      </Popup>
    </Marker>
  );
}

const MapComponent = () => {
  const coimbatoreCoordinates = [11.0168, 76.9558]; // Coordinates for Coimbatore, Tamil Nadu, India

  return (
    <MapContainer center={coimbatoreCoordinates} zoom={13} style={{ height: "500px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={coimbatoreCoordinates}>
        <Popup>
          Coimbatore, Tamil Nadu, India.
        </Popup>
      </Marker>
      <LocationMarker />
    </MapContainer>
  );
}

export default MapComponent;
