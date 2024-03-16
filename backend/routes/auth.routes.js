import express from "express";
import { loginUser, logoutUser, SignupUser } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", SignupUser);

router.post("/login", loginUser);

router.post("/logout", logoutUser);

export default router;