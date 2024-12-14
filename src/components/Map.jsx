import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Map = ({ center = [20.2961, 85.8245], zoom = 13 }) => {
  // Custom marker icon
  const createCustomIcon = (color) => {
    return L.divIcon({
      className: 'custom-icon',
      html: `<div style="
        width: 24px;
        height: 24px;
        background-color: ${color};
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
      "></div>`,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
      popupAnchor: [0, -12],
    });
  };

  const onlineIcon = createCustomIcon('#4CAF50');
  const offlineIcon = createCustomIcon('#9E9E9E');

  // Sample scooter locations in Bhubaneswar
  const scooterLocations = [
    { id: 1, position: [20.2961, 85.8245], status: 'online', user: 'Abhishek', vehicle: '5684' },
    { id: 2, position: [20.3021, 85.8245], status: 'offline', user: 'Payal', vehicle: '2458' },
    { id: 3, position: [20.2871, 85.8345], status: 'online', user: 'Preety', vehicle: '3458' },
    { id: 4, position: [20.2961, 85.8445], status: 'offline', user: 'Ritu', vehicle: '3587' },
    { id: 5, position: [20.3061, 85.8545], status: 'online', user: 'Amit', vehicle: '4521' }
  ];

  return (
    <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-md">
      {/* Map Legend */}
      <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-md z-[1000]">
        <div className="flex items-center gap-2 text-sm mb-2">
          <div className="w-3 h-3 rounded-full bg-[#4CAF50]"></div>
          <span>Online</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="w-3 h-3 rounded-full bg-[#9E9E9E]"></div>
          <span>Offline</span>
        </div>
      </div>

      <MapContainer 
        center={center} 
        zoom={zoom} 
        className="h-full w-full"
        style={{ borderRadius: '12px' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {scooterLocations.map((scooter) => (
          <Marker
            key={scooter.id}
            position={scooter.position}
            icon={scooter.status === 'online' ? onlineIcon : offlineIcon}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-medium mb-1">Vehicle #{scooter.vehicle}</h3>
                <div className="text-sm text-gray-600">
                  <p>User: {scooter.user}</p>
                  <p className={`${
                    scooter.status === 'online' ? 'text-green-500' : 'text-gray-500'
                  }`}>
                    Status: {scooter.status}
                  </p>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
