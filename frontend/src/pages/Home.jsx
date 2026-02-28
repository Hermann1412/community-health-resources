import { useEffect, useState } from "react";
import { fetchResources } from "../services/api";
import MapView from "../components/MapView";

export default function Home() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await fetchResources();
    setResources(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Community Health Map
      </h1>

      <MapView resources={resources} />
    </div>
  );
}