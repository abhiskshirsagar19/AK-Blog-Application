import express from "express";
import { signUp } from "../controller/auth.routes.js";

const router = express.Router();

router.post("/signup", signUp);

export default router;
