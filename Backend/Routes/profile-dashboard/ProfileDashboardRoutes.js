import express from "express";
import {
	getUserFavorites,
	toggleFavorite,
} from "../../Controllers/profile-dashboard/FavoriteController.js";
import { UpdateEmail } from "../../Controllers/profile-dashboard/UpdateEmailController.js";
import { UpdatePassword } from "../../Controllers/profile-dashboard/UpdatePasswordController.js";

const router = express.Router();

router.post("/update-password", UpdatePassword);
router.put("/update-email", UpdateEmail);
// Toggle favorite
router.post("/favorite-toggle", toggleFavorite);

// Get user's favorites
router.get("/:userId", getUserFavorites);

export default router;
