"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";

// Fix Leaflet default icon issue in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function Map({
  lat,
  lng,
  driverLat,
  driverLng,
}: {
  lat: number;
  lng: number;
  driverLat?: number;
  driverLng?: number;
}) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  if (!isMounted)
    return <div className="h-64 bg-gray-200 animate-pulse rounded-xl" />;

  return (
    <div className="h-64 rounded-xl overflow-hidden border border-gray-200 relative z-0">
      <MapContainer
        center={[lat, lng]}
        zoom={14}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <Marker position={[lat, lng]}>
          <Popup>Delivery Address</Popup>
        </Marker>
        {driverLat && driverLng && (
          <Marker position={[driverLat, driverLng]}>
            <Popup>Driver is here</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}
