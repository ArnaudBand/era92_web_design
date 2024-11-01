import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

// Default icon fix for Leaflet + Next.js
import "leaflet/dist/leaflet.css";
L.Icon.Default.mergeOptions({
   iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
   iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
   shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const locations = [
   { id: 1, name: "Community Center", position: [0.2498, 32.6092] as [number, number] },
   { id: 2, name: "Health Clinic", position: [0.2785, 32.3056] as [number, number] },
   // Add more locations as needed
];

interface Location {
   id: number;
   name: string;
   position: [number, number];
}

const FitMapBounds = ({ locations }: { locations: Location[] }) => {
   const map = useMap(); // Get the map instance

   useEffect(() => {
      // Create bounds for the locations
      const bounds = L.latLngBounds(locations.map(loc => loc.position));
      map.fitBounds(bounds); // Fit the map to the bounds of the markers
   }, [map, locations]); // Re-run this effect if the map or locations change

   return null; // This component does not render anything
};

const MapComponent = () => {
   const mapRef = useRef<L.Map | null>(null); // Create a ref to hold the map instance

   return (
      <div className="h-[500px] w-full rounded-lg overflow-hidden shadow-md">
         <MapContainer
            center={[0.25, 32.6]} // Adjusted center point for a closer initial view
            zoom={12} // Set a higher initial zoom level
            scrollWheelZoom={true}
            className="h-full w-full"
            ref={mapRef} // Attach the ref to the MapContainer
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
            {/* Fit the map to the bounds of the markers */}
            <FitMapBounds locations={locations} />
         </MapContainer>
      </div>
   );
};

export default MapComponent;
