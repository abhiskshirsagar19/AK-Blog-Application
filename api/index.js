import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
dotenv.config();

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("Connection Established");
  })
  .catch((error) => {
    console.log(error);
  });
const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on Port 3000 ");
});

app.get("/test", (req, res) => {
  res.json({ message: "API is coming !!!" });
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
