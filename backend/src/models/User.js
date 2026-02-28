import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,

  role: {
    type: String,
    enum: ["user", "org", "admin"],
    default: "user",
  },

  location: String,
  createdAt: { type: Date, default: Date.now },
});

export default model("User", userSchema);