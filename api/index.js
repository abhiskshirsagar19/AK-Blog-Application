import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import postRoutes from "./routes/post.routes.js";
import commentRoutes from "./routes/comment.routes.js";
import cors from "cors";
import bodyParser from "body-parser";
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

app.use(cookieParser());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.listen(3000, () => {
  console.log("Server is running on Port 3000 ");
});
app.use(
  cors({
    //origin: "http://localhost:5173", // Allow only this origin
    origin: "https://ak-blog-application-8yoj.vercel.app", // Allow only this origin
    methods: "GET,POST,PUT,DELETE", // Allowed methods
    credentials: true, // Allow credentials if needed
  })
);
app.get("/", (req, res) => {
  res.json({
    message: "Hi this is Abhi Kshirsagar's blog API's are is coming !!!",
  });
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
