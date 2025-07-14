import express from "express";
import { loginUser } from "../Auth/Login.js";
import { registerUser } from "../Auth/Register.js";
import { userProfile } from "../Auth/UserProfile.js";
import { AuthenticateToken } from "../Middlewares/AuthenticateToken.js";
import { uploadSingle } from "../config/multer.js";

const router = express.Router();

router.post("/register", uploadSingle("file"), registerUser);
router.post("/login", loginUser);
router.get("/user/me", AuthenticateToken, userProfile);

export default router;
