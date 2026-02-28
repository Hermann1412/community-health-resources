import { useEffect, useState } from "react";
import axios from "axios";
import HospitalList from "../components/HospitalList";
import MapView from "../components/MapView";

function Home() {
  const [hospitals, setHospitals] = useState([]);
  const [userLocation, setUserLocation] = useState(null);

  const fetchHospitals = async () => {
    const res = await axios.get("http://localhost:5000/api/hospitals");
    setHospitals(res.data);
  };

  const findNearby = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      setUserLocation([lat, lng]);

      const res = await axios.get(
        `http://localhost:5000/api/hospitals/nearby?lat=${lat}&lng=${lng}`
      );

      setHospitals(res.data);
    });
  };

  useEffect(() => {
    fetchHospitals();
  }, []);

  return (
    <div className="container">
      <button onClick={findNearby}>
        Find Nearby Hospitals 📍
      </button>

      <MapView hospitals={hospitals} userLocation={userLocation} />

      <HospitalList hospitals={hospitals} />
    </div>
  );
}

export default Home;