import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
	{
		property_type: { type: String, required: true },
		file: [{ type: String, required: true }], // store filenames or file paths
		desc: { type: String },
		location: { type: String, required: true },
		price: { type: Number, required: true },
		final_price: { type: Number, required: true },
		message: { type: String },
	},
	{
		timestamps: true,
	},
);

const Property = mongoose.model("Property", propertySchema);
export default Property;
