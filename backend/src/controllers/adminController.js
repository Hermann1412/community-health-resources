import Resource from "../models/Resource";

export async function approveResource(req, res) {
  const resource = await Resource.findByIdAndUpdate(
    req.params.id,
    { verified: true },
    { new: true }
  );

  res.json(resource);
}

export async function rejectResource(req, res) {
  await Resource.findByIdAndDelete(req.params.id);
  res.json({ message: "Resource rejected" });
}