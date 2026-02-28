const express = require("express");
const router = express.Router();
const {
  getHospitals,
  addHospital,
  getNearbyHospitals,
} = require("../controllers/hospitalController");

router.get("/", getHospitals);
router.post("/", addHospital);
router.get("/nearby", getNearbyHospitals);

module.exports = router;