import { Schema, model } from "mongoose";

const organizationSchema = new Schema({
  name: String,
  email: String,
  verified: { type: Boolean, default: false },
  documents: [String],
  createdAt: { type: Date, default: Date.now },
});

export default model("Organization", organizationSchema);