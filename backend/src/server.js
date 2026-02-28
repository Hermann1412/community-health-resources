import express, { json } from "express";
import cors from "cors";
import { config } from "dotenv";
import connectDB from "./config/db";
import hospitalRoutes from "./routes/resourceRoutes";
const resourceRoutes = require("./routes/resourceRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const adminRoutes = require("./routes/adminRoutes");


config();
connectDB();

const app = express();

app.use(cors());
app.use(json());

app.use("/api/hospitals", hospitalRoutes);
app.use("/api/resources", resourceRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("Community Health API Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});