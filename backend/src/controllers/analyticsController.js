import Resource from "../models/Resource";

export async function getAnalytics(req, res) {
  const totalResources = await Resource.countDocuments();

  const categories = await Resource.aggregate([
    { $group: { _id: "$category", count: { $sum: 1 } } },
  ]);

  const lowAvailability = await Resource.find({
    availability: { $regex: "limited", $options: "i" },
  });

  res.json({
    totalResources,
    categories,
    lowAvailabilityCount: lowAvailability.length,
  });
}