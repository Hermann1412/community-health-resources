import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function MapView({ hospitals, userLocation }) {
  return (
    <MapContainer
      center={userLocation || [20, 0]}
      zoom={userLocation ? 13 : 2}
      style={{ height: "400px", marginBottom: "20px" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {hospitals.map((hospital, index) => (
        <Marker
          key={index}
          position={[hospital.latitude, hospital.longitude]}
        >
          <Popup>
            <strong>{hospital.name}</strong>
            <br />
            {hospital.address}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapView;