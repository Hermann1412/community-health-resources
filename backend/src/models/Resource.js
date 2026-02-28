import { Schema, model } from "mongoose";

const resourceSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: String,
  organizationId: {
    type: Schema.Types.ObjectId,
    ref: "Organization",
  },

  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true,
    },
  },

  contactInfo: String,
  availability: String,
  verified: { type: Boolean, default: false },
  ratings: [{ type: Number }],
  createdAt: { type: Date, default: Date.now },
});

resourceSchema.index({ location: "2dsphere" });

export default model("Resource", resourceSchema);