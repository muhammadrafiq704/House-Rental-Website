import express from "express";
import { loginUser } from "../Auth/Login.js";
import { registerUser } from "../Auth/Register.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
