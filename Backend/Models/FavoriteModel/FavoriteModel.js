// models/favorite.model.js
import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Register",
			required: true,
		},
		propertyId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Property",
			required: true,
		},
		isFavorite: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true },
);

export default mongoose.model("Favorite", favoriteSchema);
