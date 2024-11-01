import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Default icon fix for Leaflet + Next.js
import "leaflet/dist/leaflet.css";
L.Icon.Default.mergeOptions({
   iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
   iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
   shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const MapComponent = () => {

   const locations = [
      { id: 1, name: "Community Center", position: [0.2498, 32.6092] as [number, number] },
      { id: 2, name: "Health Clinic", position: [0.2785, 32.3056] as [number, number] },
      // Add more locations as needed
   ];

   return (
      <div className="h-[500px] w-full rounded-lg overflow-hidden shadow-md">
         <MapContainer
            center={[0.347596, 32.582520]} // Default center point
            zoom={6}
            scrollWheelZoom={true}
            className="h-full w-full"
         >
            <TileLayer
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {locations.map((location) => (
               <Marker key={location.id} position={location.position}>
                  <Popup>{location.name}</Popup>
               </Marker>
            ))}
         </MapContainer>
      </div>
   );
};

export default MapComponent;
