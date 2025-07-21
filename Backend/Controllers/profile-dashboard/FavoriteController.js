import mongoose from "mongoose";
import Favorite from "../../Models/FavoriteModel/FavoriteModel.js";

// Toggle favorite
export const toggleFavorite = async (req, res) => {
	const { propertyId, userId } = req.body;
	try {
		// Find if the favorite already exists
		const existingFavorite = await Favorite.findOne({
			userId,
			propertyId,
		});
		if (existingFavorite) {
			// If it exists, delete it to "unfavorite"
			await Favorite.findByIdAndDelete(existingFavorite._id);
			return res.status(200).json({ message: "Removed from favorites" });
		}

		// If it doesn't exist, create it to "favorite"
		const newFavorite = new Favorite({
			userId,
			propertyId,
			isFavorite: true,
		});

		await newFavorite.save();
		return res.status(201).json({
			message: "Added to favorites",
			favorite: newFavorite,
		});
	} catch (error) {
		console.error("Error toggling favorite:", error);
		return res.status(500).json({
			message: "Server error while toggling favorite",
			error: error.message,
		});
	}
};

// controllers/favoriteController.js
export const getUserFavorites = async (req, res) => {
	const { userId } = req.params;

	try {
		if (!mongoose.Types.ObjectId.isValid(userId)) {
			return res.status(400).json({ message: "Invalid user ID" });
		}

		const favorites = await Favorite.find({
			userId: new mongoose.Types.ObjectId(userId),
			isFavorite: true,
		}).populate("propertyId");

		if (!favorites) {
			return res.status(404).json({ message: "No favorites found" });
		}

		res.status(200).json(favorites);
	} catch (error) {
		console.error("Error fetching favorites:", error);
		res
			.status(500)
			.json({ message: "Error fetching favorites", error: error.message });
	}
};
