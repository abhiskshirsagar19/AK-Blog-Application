import express from "express";
import verifyToken from "../utils/verifyUser.js";
import { create, deletePost, getposts } from "../controller/post.controller.js";
const router = express.Router();

router.post("/create", verifyToken, create);
router.get("/getposts", getposts);
router.delete("/delete/:postId/:userId", verifyToken, deletePost);
export default router;
