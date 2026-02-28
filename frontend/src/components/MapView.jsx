import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

export default function MapView({ resources }) {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation([
        position.coords.latitude,
        position.coords.longitude,
      ]);
    });
  }, []);

  if (!userLocation) return <p>Getting your location...</p>;

  return (
    <MapContainer
      center={userLocation}
      zoom={13}
      className="h-[400px] rounded-2xl"
    >
      <TileLayer
        attribution="© OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={userLocation}>
        <Popup>You are here</Popup>
      </Marker>

      {resources.map((r) => (
        <Marker key={r.id} position={[r.lat, r.lng]}>
          <Popup>
            <strong>{r.name}</strong>
            <br />
            📞 {r.phone}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}