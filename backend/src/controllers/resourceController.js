export async function getEmergencyResources(req, res) {
  const resources = await Resource.find({
    availability: { $regex: "24/7", $options: "i" },
    verified: true,
  });

  res.json(resources);
}