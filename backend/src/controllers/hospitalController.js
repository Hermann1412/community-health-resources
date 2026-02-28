const Hospital = require("../models/Hospital");
const calculateDistance = require("../utils/distance");

// Get all hospitals
exports.getHospitals = async (req, res) => {
  const hospitals = await Hospital.find();
  res.json(hospitals);
};

// Add new hospital
exports.addHospital = async (req, res) => {
  try {
    const hospital = await Hospital.create(req.body);
    res.status(201).json(hospital);
  } catch (error) {
    res.status(400).json({ message: "Error adding hospital" });
  }
};

// Find nearby hospitals
exports.getNearbyHospitals = async (req, res) => {
  const { lat, lng } = req.query;

  if (!lat || !lng) {
    return res.status(400).json({ message: "Latitude and longitude required" });
  }

  const hospitals = await Hospital.find();

  const nearby = hospitals
    .map((hospital) => {
      const distance = calculateDistance(
        parseFloat(lat),
        parseFloat(lng),
        hospital.latitude,
        hospital.longitude
      );

      return { ...hospital._doc, distance };
    })
    .sort((a, b) => a.distance - b.distance);

  res.json(nearby.slice(0, 5)); // return 5 nearest hospitals
};