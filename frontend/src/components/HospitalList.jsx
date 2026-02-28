function HospitalList({ hospitals }) {
  return (
    <div>
      {hospitals.map((hospital, index) => (
        <div key={index} className="card">
          <h3>{hospital.name}</h3>
          <p>{hospital.address}</p>
          <p>📞 {hospital.phone}</p>
          {hospital.distance && (
            <p>📍 {hospital.distance.toFixed(2)} km away</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default HospitalList;